"use strict";

/**
 * ieft-cat-new controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ieft-cat-new.ieft-cat-new",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = ctx.query.populate || {
        news: {
          populate: {
            ...strapi.config["population-schemas"].collections.news,
            content: false,
          },
        },
      };

      const entites = await strapi.entityService.findMany(
        "api::ieft-cat-new.ieft-cat-new",
        ctx.query
      );

      return entites;
    },
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ieft-cat-new.ieft-cat-new",
        {
          news: {
            populate: strapi.config["population-schemas"].collections.news,
          },
        }
      );
    },
  })
);
