"use strict";

/**
 * ecole3a-program controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ecole3a-program.ecole3a-program",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate =
        ctx.query.populate ||
        strapi.config["population-schemas"].singleTypes.nsPrograms;
      return await strapi
        .service("api::ecole3a-program.ecole3a-program")
        .find(sanitized);
    },
  })
);
