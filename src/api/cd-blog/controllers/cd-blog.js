"use strict";

/**
 * cd-blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::cd-blog.cd-blog", ({ strapi }) => ({
  async find(ctx) {
    return await strapi.entityService.findMany("api::cd-blog.cd-blog", {
      ...ctx.query,
      // population schema is the same as cd-actualites
      populate: strapi.config["population-schemas"].singleTypes.nsActualites,
    });
  },
}));
