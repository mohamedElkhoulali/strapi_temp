"use strict";

/**
 * figs-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-taxonomy.figs-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::figs-taxonomy.figs-taxonomy",
        ctx.query
      );
    },
  })
);
