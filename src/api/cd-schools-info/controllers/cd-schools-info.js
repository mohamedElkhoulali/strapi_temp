"use strict";

/**
 * cd-schools-info controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::cd-schools-info.cd-schools-info",
  ({ strapi }) => ({
    async find(ctx) {
      if (!ctx.query.populate) {
        ctx.query.populate =
          strapi.config["population-schemas"].collections.schoolsInfo;
      }

      return await super.find(ctx);
    },
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::cd-schools-info.cd-schools-info",
        ctx.query.populate ||
          strapi.config["population-schemas"].collections.schoolsInfo
      );
    },
    async count(ctx) {
      const { data } = await super.find(ctx);
      return data.length || 0;
    },
    async findBySchoolName(ctx) {
      const { name } = ctx.params;

      ctx.query.filters = {
        school: {
          name,
        },
        ...ctx.query?.filters,
      };

      if (!ctx.query.populate) {
        ctx.query.populate =
          strapi.config["population-schemas"].collections.schoolsInfo;
      }

      const { results } = await strapi
        .service("api::cd-schools-info.cd-schools-info")
        .find(ctx.query);

      if (results.length > 0) return results[0];
    },
  })
);
