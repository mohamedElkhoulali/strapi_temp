"use strict";

/**
 * ifag-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ifag-blog.ifag-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::ifag-blog.ifag-blog", {
        ...ctx.query,
        // population schema is the same as ifag-actualites
        populate: strapi.config["population-schemas"].singleTypes.nsActualites,
      });
    },
  })
);
