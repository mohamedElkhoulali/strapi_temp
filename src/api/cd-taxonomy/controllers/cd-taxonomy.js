"use strict";

/**
 * cd-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::cd-taxonomy.cd-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::cd-taxonomy.cd-taxonomy",
        ctx.query
      );
    },
  })
);
