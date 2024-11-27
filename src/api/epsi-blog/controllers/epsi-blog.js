"use strict";

/**
 * epsi-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::epsi-blog.epsi-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::epsi-blog.epsi-blog", {
        ...ctx.query,
        // population schema is the same as epsi-actualites
        populate: strapi.config["population-schemas"].singleTypes.nsActualites,
      });
    },
  })
);
