"use strict";

/**
 * cd-new controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::cd-new.cd-new", ({ strapi }) => ({
  async find(ctx) {
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

    ctx.query.filters = {
      ...ctx.query.filters,
      ...excludeBlogsQuery,
    };

    let entities = await strapi.entityService.findMany("api::cd-new.cd-new", {
      ...ctx.query,
      populate: {
        ...strapi.config["population-schemas"].collections.news,
        content: false,
      },
    });

    return entities;
  },
  async findBlog(ctx) {
    const filters = {
      ...ctx.query?.filters,
      cat_news: { slug: "blog" },
    };

    return await strapi.entityService.findMany("api::cd-new.cd-new", {
      ...ctx.query,
      filters,
      populate: {
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
      "api::cd-new.cd-new",
      strapi.config["population-schemas"].collections.news
    );
  },
}));
