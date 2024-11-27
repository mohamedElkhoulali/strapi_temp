"use strict";

/**
 * ieft-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ieft-actualite.ieft-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::ieft-actualite.ieft-actualite")
        .find(ctx);
    },
  })
);
