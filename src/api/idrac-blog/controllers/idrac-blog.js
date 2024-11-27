"use strict";

/**
 * idrac-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::idrac-blog.idrac-blog",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::idrac-blog.idrac-blog", {
        ...ctx.query,
        // population schema is the same as idrac-actualites
        populate: strapi.config["population-schemas"].singleTypes.nsActualites,
      });
    },
  })
);
