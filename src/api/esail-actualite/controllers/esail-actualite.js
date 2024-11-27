"use strict";

/**
 * esail-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::esail-actualite.esail-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].singleTypes.nsActualites;

      if (ctx.query?.locale) {
        ctx.locale = ctx.query.locale;
      }

      return await strapi
        .service("api::esail-actualite.esail-actualite")
        .find(ctx);
    },
  })
);
