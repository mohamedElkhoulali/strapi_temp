"use strict";

/**
 * esail-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::esail-taxonomy.esail-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::esail-taxonomy.esail-taxonomy",
        ctx.query
      );
    },
  })
);
