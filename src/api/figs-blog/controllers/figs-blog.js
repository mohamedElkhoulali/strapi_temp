"use strict";

/**
 * figs-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-blog.figs-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::figs-blog.figs-blog", {
        ...ctx.query,
        // population schema is the same as figs-actualites
        populate: strapi.config["population-schemas"].singleTypes.nsActualites,
      });
    },
  })
);
