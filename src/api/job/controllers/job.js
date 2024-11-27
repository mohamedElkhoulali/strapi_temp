"use strict";

/**
 * job controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { userHelper } = strapi.config.functions.helpers;
const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;

module.exports = createCoreController("api::job.job", ({ strapi }) => ({
  async find(ctx) {
    let filters = { ...ctx.query?.filters };

    if (userHelper.isAuthenticatedUser(ctx)) {
      const schools = await strapi.config.functions.schools.getIds(ctx);

      filters = {
        ...ctx.query?.filters,
        school: schools,
      };
    }

    const entities = await strapi.entityService.findMany("api::job.job", {
      ...ctx.query,
      filters: filters,
      populate: ctx.query.populate || "*",
    });

    return await contentAPI.output(
      entities,
      strapi.getModel("api::job.job"),
      ctx.state.auth
    );
  },
  async findOne(ctx) {
    if (userHelper.isAuthenticatedUser(ctx)) {
      const schools = await strapi.config.functions.schools.getIds(ctx);
      ctx.query.filters = {
        school: schools,
      };
    }
    const population = ctx.query.populate || "*";

    const entity =
      await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::job.job",
        population
      );
    return entity;
  },
  async findAll(ctx) {
    if (!ctx.query.populate) {
      ctx.query.populate = "*";
    }

    if (userHelper.isGlobalUser(ctx)) {
      return await super.find(ctx);
    }
  },
}));
