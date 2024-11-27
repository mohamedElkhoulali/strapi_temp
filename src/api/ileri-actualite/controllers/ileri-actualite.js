"use strict";

/**
 * ileri-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ileri-actualite.ileri-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::ileri-actualite.ileri-actualite")
        .find(ctx);
    },
  })
);
