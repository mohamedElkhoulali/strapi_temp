"use strict";

/**
 * ecole3a-search controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ecole3a-search.ecole3a-search",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate = ctx.query.populate || {
        seo: strapi.config["population-schemas"].components.seo,
      };
      return await strapi.service("api::ecole3a-search.ecole3a-search").find(sanitized);
    },
  })
);
