"use strict";

/**
 * iet-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::iet-actualite.iet-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::iet-actualite.iet-actualite")
        .find(ctx);
    },
  })
);
