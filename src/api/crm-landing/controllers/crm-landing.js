"use strict";

/**
 * crm-landing controller
 */

module.exports = {
  async findOne(ctx, next) {
    const {
      params: { action },
    } = ctx;

    ctx.query.filters = {
      ...ctx.query?.filters,
      action: action,
    };

    const entities = await strapi.config.functions.namespace.find(
      ctx,
      "crm-landing",
      strapi.config["population-schemas"].collections.crmLanding
    );

    if (entities.length) return entities[0];
  },
};
