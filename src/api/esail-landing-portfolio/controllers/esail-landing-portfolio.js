"use strict";

/**
 * esail-landing-portfolio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::esail-landing-portfolio.esail-landing-portfolio",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate =
        strapi.config["population-schemas"].collections.landingPorfolio;

      if (ctx.query?.locale) {
        ctx.locale = ctx.query.locale;
      }

      return await strapi
        .service("api::esail-landing-portfolio.esail-landing-portfolio")
        .find(ctx);
    },
  })
);
