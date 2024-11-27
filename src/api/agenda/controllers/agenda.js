"use strict";

/**
 * agenda controller
 */

module.exports = {
  async find(ctx, next) {
    const data = await strapi.config.functions.namespace.findSingle(
      ctx,
      "agenda",
      ctx.query.populate ||
        strapi.config["population-schemas"].singleTypes.agenda
    );

    if (data) ctx.body = data;
  },
};
