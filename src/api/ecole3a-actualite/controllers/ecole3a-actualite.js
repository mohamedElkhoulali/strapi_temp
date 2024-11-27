"use strict";

/**
 * ecole3a-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ecole3a-actualite.ecole3a-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::ecole3a-actualite.ecole3a-actualite")
        .find(ctx);
    },
  })
);
