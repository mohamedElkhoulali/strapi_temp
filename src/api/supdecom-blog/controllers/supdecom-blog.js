"use strict";

/**
 * supdecom-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::supdecom-blog.supdecom-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::supdecom-blog.supdecom-blog",
        {
          ...ctx.query,
          // population schema is the same as supdecom-actualites
          populate:
            strapi.config["population-schemas"].singleTypes.nsActualites,
        }
      );
    },
  })
);
