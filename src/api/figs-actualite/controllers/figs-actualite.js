"use strict";

/**
 * figs-actualite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-actualite.figs-actualite",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        ctx.query.populate ||
        strapi.config["population-schemas"].singleTypes.nsActualites;

      if (ctx.query?.locale) {
        ctx.locale = ctx.query.locale;
      }

      return await strapi
        .service("api::figs-actualite.figs-actualite")
        .find(ctx);
    },
  })
);
