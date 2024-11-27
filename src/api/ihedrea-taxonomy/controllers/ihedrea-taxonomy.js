"use strict";

/**
 * ihedrea-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ihedrea-taxonomy.ihedrea-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::ihedrea-taxonomy.ihedrea-taxonomy",
        ctx.query
      );
    },
  })
);
