"use strict";

/**
 * iet-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::iet-taxonomy.iet-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::iet-taxonomy.iet-taxonomy",
        ctx.query
      );
    },
  })
);
