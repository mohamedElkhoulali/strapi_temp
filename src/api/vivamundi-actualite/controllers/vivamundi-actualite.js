"use strict";

/**
 * vivamundi-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vivamundi-actualite.vivamundi-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::vivamundi-actualite.vivamundi-actualite")
        .find(ctx);
    },
  })
);
