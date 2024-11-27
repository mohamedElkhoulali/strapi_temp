"use strict";

/**
 * supdecom-taxonomy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::supdecom-taxonomy.supdecom-taxonomy",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::supdecom-taxonomy.supdecom-taxonomy",
        ctx.query
      );
    },
  })
);
