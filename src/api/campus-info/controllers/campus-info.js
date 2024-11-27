"use strict";

/**
 * campus-info controller
 */

module.exports = {
  async find(ctx) {
    return await strapi.config.functions.namespace.find(
      ctx,
      "campus-info",
      ctx.query.populate ||
        strapi.config["population-schemas"].collections.campusInfo
    );
  },
  async findOneByCampus(ctx) {
    if (ctx.params.slug) {
      ctx.query.filters = { campus: { slug: ctx.params.slug } };
      ctx.query.limit = 1;

      const entities = await strapi.config.functions.namespace.find(
        ctx,
        "campus-info",
        ctx.query.populate ||
          strapi.config["population-schemas"].collections.campusInfo
      );

      if (entities.length > 0) {
        return entities[0];
      }
    }
  },
};
