"use strict";

/**
 * vivamundi-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vivamundi-taxonomy.vivamundi-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::vivamundi-taxonomy.vivamundi-taxonomy",
        ctx.query
      );
    },
  })
);
