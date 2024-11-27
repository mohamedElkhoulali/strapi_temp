"use strict";

/**
 * supdecom-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::supdecom-actualite.supdecom-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      return await strapi
        .service("api::supdecom-actualite.supdecom-actualite")
        .find(ctx);
    },
  })
);