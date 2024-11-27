"use strict";

/**
 * igefi-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::igefi-blog.igefi-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::igefi-blog.igefi-blog", {
        ...ctx.query,
        // population schema is the same as igefi-actualites
        populate: strapi.config["population-schemas"].singleTypes.nsActualites,
      });
    },
  })
);
