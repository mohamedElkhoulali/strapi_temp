"use strict";

/**
 * idrac-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::idrac-taxonomy.idrac-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::idrac-taxonomy.idrac-taxonomy",
        ctx.query
      );
    },
  })
);
