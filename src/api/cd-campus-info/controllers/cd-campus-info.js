"use strict";

/**
 * cd-campus-info controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::cd-campus-info.cd-campus-info",
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
          "api::cd-campus-info.cd-campus-info",
          ctx.params.id,
          {
            populate:
              strapi.config["population-schemas"].collections.campusInfo,
          }
        );
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
