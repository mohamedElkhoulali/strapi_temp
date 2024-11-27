"use strict";

/**
 * ifag-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ifag-actualite.ifag-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::ifag-actualite.ifag-actualite")
        .find(ctx);
    },
  })
);
