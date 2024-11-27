"use strict";

/**
 * ieft-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ieft-blog.ieft-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::ieft-blog.ieft-blog", {
        ...ctx.query,
        // population schema is the same as ieft-actualites
        populate:
          ctx.query.populate ||
          strapi.config["population-schemas"].singleTypes.nsActualites,
      });
    },
  })
);
