"use strict";

/**
 * cd-ecole controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::cd-ecole.cd-ecole",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = {
        seo: {
          populate: { og: true, twitter: true, metas: true, shareImage: true },
        },
        header_image: true,
      };
      const sanitized = await this.sanitizeQuery(ctx);
      return await strapi.service("api::cd-ecole.cd-ecole").find(sanitized);
    },
  })
);
