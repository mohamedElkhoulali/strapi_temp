"use strict";

/**
 * epsi-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::epsi-taxonomy.epsi-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::epsi-taxonomy.epsi-taxonomy",
        ctx.query
      );
    },
  })
);
