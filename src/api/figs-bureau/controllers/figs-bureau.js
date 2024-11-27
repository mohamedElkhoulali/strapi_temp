"use strict";

/**
 * figs-bureau controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-bureau.figs-bureau",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate = {
        bannerImage: true,
        contentHeadline: true,
        labels: { populate: { items: true } },
        content: strapi.config["population-schemas"].dynamicZone,
        textBeforeFooter:
          strapi.config["population-schemas"].components.textBeforeFooter,
        seo: {
          populate: { og: true, twitter: true, metas: true, shareImage: true },
        },
      };

      if (sanitized.query?.locale) {
        sanitized.locale = sanitized.query.locale;
      }
      return await strapi.service("api::figs-bureau.figs-bureau").find(sanitized);
    },
  })
);
