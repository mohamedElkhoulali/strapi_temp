"use strict";

/**
 * igefi-search controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::igefi-search.igefi-search",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate = ctx.query.populate || {
        seo: strapi.config["population-schemas"].components.seo,
      };
      return await strapi
        .service("api::igefi-search.igefi-search")
        .find(sanitized);
    },
  })
);
