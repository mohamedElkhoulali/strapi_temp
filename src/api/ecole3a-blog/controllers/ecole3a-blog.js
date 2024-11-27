"use strict";

/**
 * ecole3a-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ecole3a-blog.ecole3a-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::ecole3a-blog.ecole3a-blog",
        {
          ...ctx.query,
          // population schema is the same as ecole3a-actualites
          populate:
            strapi.config["population-schemas"].singleTypes.nsActualites,
        }
      );
    },
  })
);
