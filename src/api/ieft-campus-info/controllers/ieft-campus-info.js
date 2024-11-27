"use strict";

/**
 * ieft-campus-info controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ieft-campus-info.ieft-campus-info",
  ({ strapi }) => ({
    async find(ctx) {
      const data = await strapi.config.functions.namespace.find(
        ctx,
        "campus-info",
        strapi.config["population-schemas"].collections.campusInfo
      );

      if (data) ctx.body = data;
    },
    async findOne(ctx) {
      if (ctx.params.id) {
        return await strapi.entityService.findOne(
          "api::ieft-campus-info.ieft-campus-info",
          ctx.params.id,
          {
            populate:
              strapi.config["population-schemas"].collections.campusInfo,
          }
        );
      }
    },
    async findOneByCampus(ctx) {
      if (ctx.params.slug) {
        const entities = await strapi.entityService.findMany(
          "api::ieft-campus-info.ieft-campus-info",
          {
            filters: { campus: { slug: ctx.params.slug } },
            populate:
              strapi.config["population-schemas"].collections.campusInfo,
            limit: 1,
          }
        );

        if (entities.length > 0) {
          return entities[0];
        }
      }
    },
    async count(ctx) {
      const data = await strapi.config.functions.namespace.count(
        ctx,
        "campus-info"
      );

      if (data) ctx.body = data;
    },
  })
);
