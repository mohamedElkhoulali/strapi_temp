"use strict";

/**
 * wis-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::wis-blog.wis-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::wis-blog.wis-blog", {
        ...ctx.query,
        // population schema is the same as wis-actualites
        populate: strapi.config["population-schemas"].singleTypes.nsActualites,
      });
    },
  })
);
