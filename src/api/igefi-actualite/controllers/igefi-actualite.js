"use strict";

/**
 * igefi-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::igefi-actualite.igefi-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::igefi-actualite.igefi-actualite")
        .find(ctx);
    },
  })
);
