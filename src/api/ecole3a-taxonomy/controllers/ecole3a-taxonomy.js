"use strict";

/**
 * ecole3a-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ecole3a-taxonomy.ecole3a-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::ecole3a-taxonomy.ecole3a-taxonomy",
        ctx.query
      );
    },
  })
);
