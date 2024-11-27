"use strict";

/**
 * wis-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::wis-taxonomy.wis-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::wis-taxonomy.wis-taxonomy",
        ctx.query
      );
    },
  })
);
