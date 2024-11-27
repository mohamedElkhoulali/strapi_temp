"use strict";

/**
 * icl-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::icl-taxonomy.icl-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::icl-taxonomy.icl-taxonomy",
        ctx.query
      );
    },
  })
);
