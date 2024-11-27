"use strict";

/**
 * epsi-program controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::epsi-program.epsi-program",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate =
        ctx.query.populate ||
        strapi.config["population-schemas"].singleTypes.nsPrograms;
      return await strapi
        .service("api::epsi-program.epsi-program")
        .find(sanitized);
    },
  })
);
