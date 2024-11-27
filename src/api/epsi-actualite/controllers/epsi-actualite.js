"use strict";

/**
 * epsi-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::epsi-actualite.epsi-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::epsi-actualite.epsi-actualite")
        .find(ctx);
    },
  })
);
