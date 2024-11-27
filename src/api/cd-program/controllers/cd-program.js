"use strict";

/**
 * cd-program controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::cd-program.cd-program",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitized = await this.sanitizeQuery(ctx);
      sanitized.populate =
        ctx.query.populate ||
        strapi.config["population-schemas"].singleTypes.nsPrograms;
      return await strapi.service("api::cd-program.cd-program").find(sanitized);
    },
  })
);
