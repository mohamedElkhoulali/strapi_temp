"use strict";

/**
 * menu-enrichi controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::menu-enrichi.menu-enrichi",
  ({ strapi }) => ({
    async find(ctx) {
      const entities = await strapi.entityService.findMany(
        "api::menu-enrichi.menu-enrichi",
        {
          ...ctx.query,
          filters: {
            ...ctx.query.filters,
            website: { id: ctx.state.user.id },
          },
          populate: strapi.config["population-schemas"].collections.menuEnrichi,
        }
      );

      return entities;
    },
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.entityService.findOne(
        "api::menu-enrichi.menu-enrichi",
        id,
        {
          populate: {
            ...strapi.config["population-schemas"].collections.menuEnrichi,
            website: true,
          },
        }
      );

      if (entity?.website?.id === ctx.state.user.id) {
        return await this.sanitizeOutput(entity, ctx);
      }
    },
  })
);
