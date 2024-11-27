"use strict";

/**
 * ieft-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ieft-taxonomy.ieft-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::ieft-taxonomy.ieft-taxonomy",
        ctx.query
      );
    },
  })
);
