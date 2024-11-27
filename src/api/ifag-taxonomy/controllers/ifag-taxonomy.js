"use strict";

/**
 * ifag-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ifag-taxonomy.ifag-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::ifag-taxonomy.ifag-taxonomy",
        ctx.query
      );
    },
  })
);
