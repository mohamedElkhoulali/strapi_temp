"use strict";

/**
 * ihedrea-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ihedrea-blog.ihedrea-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::ihedrea-blog.ihedrea-blog",
        {
          ...ctx.query,
          // population schema is the same as ihedrea-actualites
          populate:
            strapi.config["population-schemas"].singleTypes.nsActualites,
        }
      );
    },
  })
);
