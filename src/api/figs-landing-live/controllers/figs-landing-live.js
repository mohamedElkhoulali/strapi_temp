"use strict";

/**
 * figs-landing-live controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-landing-live.figs-landing-live",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.populate = {
        bannerImage: true,
        labels: true,
        content: strapi.config["population-schemas"].dynamicZone,
        textBeforeFooter:
          strapi.config["population-schemas"].components.textBeforeFooter,
        seo: {
          populate: { og: true, twitter: true, metas: true, shareImage: true },
        },
      };

      if (ctx.query?.locale) {
        ctx.locale = ctx.query.locale;
      }

      return await strapi
        .service("api::figs-landing-live.figs-landing-live")
        .find(ctx);
    },
  })
);
