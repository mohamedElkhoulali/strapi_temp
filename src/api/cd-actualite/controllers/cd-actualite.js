"use strict";

/**
 * cd-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::cd-actualite.cd-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::cd-actualite.cd-actualite")
        .find(ctx);
    },
  })
);
