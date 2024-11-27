"use strict";

/**
 * ihedrea-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ihedrea-actualite.ihedrea-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::ihedrea-actualite.ihedrea-actualite")
        .find(ctx);
    },
  })
);
