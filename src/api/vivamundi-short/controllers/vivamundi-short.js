"use strict";

/**
 * vivamundi-short controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vivamundi-short.vivamundi-short",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = ["image"];

      return await super.find(ctx);
    },
  })
);
