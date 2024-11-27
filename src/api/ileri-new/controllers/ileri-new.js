"use strict";

/**
 * ileri-new controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const addExcludeBlogQueryToFilters = (queryFilters) => {
  const excludeBlogsQuery = {
    $or: [
      {
        cat_news: {
          id: {
            $null: true,
          },
        },
      },
      {
        cat_news: {
          slug: {
            $ne: "blog",
          },
        },
      },
    ],
  };

  if (queryFilters) {
    const merged = {
      $and: [excludeBlogsQuery, { ...queryFilters }],
    };

    return merged;
  } else {
    return excludeBlogsQuery;
  }
};

module.exports = createCoreController(
  "api::ileri-new.ileri-new",
  ({ strapi }) => ({
    async find(ctx) {
      const filters = addExcludeBlogQueryToFilters(ctx.query.filters);
      ctx.query.filters = filters;

      ctx.query.populate = ctx.query.populate || {
        ...strapi.config["population-schemas"].collections.news,
        content: false,
      };

      const entities = await super.find(ctx);

      return entities;
    },
    async paginationInfos(ctx) {
      const { newsPerPage } = ctx.params;

      const filters = addExcludeBlogQueryToFilters(ctx.query.filters);
      ctx.query.filters = filters;

      ctx.query.populate = null;
      ctx.query.fields = "id";

      ctx.query.pagination = {
        page: 1,
        pageSize: newsPerPage,
        withCount: true,
      };

      const {
        meta: {
          pagination: { pageSize, pageCount, total },
        },
      } = await super.find(ctx);

      return { pageSize, pageCount, total };
    },
    async findBlog(ctx) {
      const filters = {
        ...ctx.query?.filters,
        cat_news: { slug: "blog" },
      };

      return await strapi.entityService.findMany("api::ileri-new.ileri-new", {
        ...ctx.query,
        filters,
        populate: ctx.query.populate || {
          ...strapi.config["population-schemas"].collections.news,
          content: false,
        },
      });
    },
    async count(ctx) {
      const { data } = await super.find(ctx);
      return data.length || 0;
    },
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ileri-new.ileri-new",
        ctx.query.populate ||
          strapi.config["population-schemas"].collections.news
      );
    },
  })
);
