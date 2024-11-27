"use strict";

/**
 * wis-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::wis-actualite.wis-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::wis-actualite.wis-actualite")
        .find(ctx);
    },
  })
);
