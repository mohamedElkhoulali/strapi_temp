"use strict";

/**
 * vivamundi-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vivamundi-blog.vivamundi-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::vivamundi-blog.vivamundi-blog",
        {
          ...ctx.query,
          // population schema is the same as vivamundi-actualites
          populate:
            strapi.config["population-schemas"].singleTypes.nsActualites,
        }
      );
    },
  })
);
