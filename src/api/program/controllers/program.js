"use strict";

/**
 * programs controller
 */

module.exports = {
  async find(ctx, next) {
    const entity = await strapi.config.functions.namespace.findSingle(
      ctx,
      "program",
      strapi.config["population-schemas"].singleTypes.programs
    );

    return entity;
  },
};
