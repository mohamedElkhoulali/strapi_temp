"use strict";

/**
 * figs-ecole controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-ecole.figs-ecole",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate = {
        seo: {
          populate: { og: true, twitter: true, metas: true, shareImage: true },
        },
        header_image: true,
        content: strapi.config["population-schemas"].dynamicZone,
        textBeforeFooter:
          strapi.config["population-schemas"].components.textBeforeFooter,
      };

      if (sanitized.query?.locale) {
        sanitized.locale = sanitized.query.locale;
      }
      
      return await strapi.service("api::figs-ecole.figs-ecole").find(sanitized);
    },
  })
);
