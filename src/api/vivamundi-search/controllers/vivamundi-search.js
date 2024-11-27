"use strict";

/**
 * vivamundi-search controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vivamundi-search.vivamundi-search",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate = ctx.query.populate || {
        seo: strapi.config["population-schemas"].components.seo,
      };
      return await strapi
        .service("api::vivamundi-search.vivamundi-search")
        .find(sanitized);
    },
  })
);
