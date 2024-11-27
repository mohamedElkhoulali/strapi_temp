"use strict";

/**
 * igefi-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::igefi-taxonomy.igefi-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::igefi-taxonomy.igefi-taxonomy",
        ctx.query
      );
    },
  })
);
