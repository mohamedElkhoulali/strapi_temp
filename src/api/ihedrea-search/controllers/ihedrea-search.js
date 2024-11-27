"use strict";

/**
 * ihedrea-search controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ihedrea-search.ihedrea-search",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate = ctx.query.populate || {
        seo: strapi.config["population-schemas"].components.seo,
      };
      return await strapi
        .service("api::ihedrea-search.ihedrea-search")
        .find(sanitized);
    },
  })
);
