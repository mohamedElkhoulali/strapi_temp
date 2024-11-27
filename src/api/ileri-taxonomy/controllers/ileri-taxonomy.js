"use strict";

/**
 * ileri-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ileri-taxonomy.ileri-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::ileri-taxonomy.ileri-taxonomy",
        ctx.query
      );
    },
  })
);
