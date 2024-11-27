"use strict";

/**
 * iet-program controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::iet-program.iet-program",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate =
        ctx.query.populate ||
        strapi.config["population-schemas"].singleTypes.nsPrograms;
      return await strapi
        .service("api::iet-program.iet-program")
        .find(sanitized);
    },
  })
);
