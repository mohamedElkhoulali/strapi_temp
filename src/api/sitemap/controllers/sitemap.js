"use strict";

/**
 * sitemap controller
 */

const mappingFunctions = {
  base: (item) => "/" + item.slug,
  articles: (article) => {
    if (article.landing) {
      return "/" + article.landing.slug + "/" + article.slug;
    } else {
      return "/" + article.slug;
    }
  },
};

const filterFunctions = {
  news: (news) => news.cat_news.filter((cat) => cat.slug == "blog").length <= 0,
  blogs: (blog) => blog.cat_news.filter((cat) => cat.slug == "blog").length > 0,
};

module.exports = {
  async find(ctx, next) {
    const profile = await strapi
      .service("api::profile.profile")
      .getUserProfile(ctx);
    const schools = strapi.config.functions.schools.getIds(ctx);
    let pages = [];

    // get the landings paths
    pages = await strapi
      .service("api::sitemap.sitemap")
      .getNamspacedPaths(ctx, "landing", mappingFunctions.base, pages);

    // get the namespaced articles paths
    pages = await strapi
      .service("api::sitemap.sitemap")
      .getNamspacedPaths(ctx, "article", mappingFunctions.articles, pages, {
        landing: true,
      });

    // get the commons articles paths
    pages = await strapi
      .service("api::sitemap.sitemap")
      .getCommonsArticlesPaths(ctx, mappingFunctions.base, pages);

    // get the namespaced blogs paths
    const blogs = await strapi
      .service("api::sitemap.sitemap")
      .getNamspacedPaths(
        ctx,
        "new",
        mappingFunctions.base,
        [],
        {
          cat_news: true,
        },
        filterFunctions.blogs
      );

    // get the namespaced news paths
    let news = await strapi.service("api::sitemap.sitemap").getNamspacedPaths(
      ctx,
      "new",
      mappingFunctions.base,
      [],
      {
        cat_news: true,
      },
      filterFunctions.news
    );

    // get the schools news paths
    news = await strapi
      .service("api::sitemap.sitemap")
      .getSchoolsPaths(ctx, "api::new.new", mappingFunctions.base, news);

    // get the campuses paths
    const campuses = await strapi
      .service("api::sitemap.sitemap")
      .getSchoolsPaths(ctx, "api::campus.campus", mappingFunctions.base);

    // get the courses paths
    const courses = await strapi
      .controller("api::course.course")
      .find(ctx)
      .then((entities) => entities.map(mappingFunctions.base));

    return {
      pages,
      news,
      blogs,
      campuses,
      courses,
    };
  },
};
