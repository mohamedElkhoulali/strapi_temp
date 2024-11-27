"use strict";

/**
 * ihedrea-cat-new controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ihedrea-cat-new.ihedrea-cat-new",
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
        "api::ihedrea-cat-new.ihedrea-cat-new",
        ctx.query
      );

      return entites;
    },
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ihedrea-cat-new.ihedrea-cat-new",
        {
          news: {
            populate: strapi.config["population-schemas"].collections.news,
          },
        }
      );
    },
  })
);
