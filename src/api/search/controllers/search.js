"use strict";

/**
 * search controller
 */

module.exports = {
  async find(ctx, next) {
    const entity = await strapi.config.functions.namespace.findSingle(
      ctx,
      "search",
      { seo: strapi.config["population-schemas"].components.seo }
    );

    return entity;
  },
};
