"use strict";

/**
 * landing controller
 */

module.exports = {
  async findOne(ctx, next) {
    return await strapi.config.functions.namespace.findOne(
      ctx,
      "landing",
      ctx.query.populate ||
        strapi.config["population-schemas"].collections.landing
    );
  },
  async find(ctx, next) {
    return await strapi.config.functions.namespace.find(
      ctx,
      "landing",
      ctx.query.populate ||
        strapi.config["population-schemas"].collections.landing
    );
  },
};
