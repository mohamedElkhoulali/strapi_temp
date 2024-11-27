"use strict";

/**
 * school controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::school.school", ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service("api::school.school").find(ctx.query);
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service("api::school.school").findOne(id, ctx.query);
  },
  async count(ctx) {
    const entities = await strapi.entityService.findMany("api::school.school");

    return entities.length || 0;
  },
  async findByCampus(ctx) {
    const { slug } = ctx.params;

    ctx.query.filters = {
      campuses2: {
        slug,
      },
      ...ctx.query?.filters,
    };

    return await strapi.service("api::school.school").find(ctx.query);
  },
}));
