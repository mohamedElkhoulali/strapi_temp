"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async find(ctx) {
    const { populate } = ctx.query;

    if (strapi.config.functions.helpers.userHelper.isAuthenticatedUser(ctx)) {
      return await strapi.config.functions.schools.find(
        ctx,
        "api::event.event",
        populate || ["campus", "courses", "schools"]
      );
    } else if (strapi.config.functions.helpers.userHelper.isGlobalUser(ctx)) {
      return await strapi.entityService.findMany("api::event.event", {
        ...ctx.query,
        populate: populate || ["campus", "courses", "schools"],
      });
    }
  },
  async findOne(ctx) {
    const { populate } = ctx.query;

    return await strapi.config.functions.controllerOverride.findOneBySlug(
      ctx,
      "api::event.event",
      populate || ["campus", "courses", "schools"]
    );
  },
  async count(ctx) {
    return await strapi.config.functions.schools.count(ctx, "api::event.event");
  },
}));
