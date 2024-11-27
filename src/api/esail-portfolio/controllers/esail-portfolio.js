"use strict";

/**
 * esail-portfolio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::esail-portfolio.esail-portfolio",
  ({ strapi }) => ({
    async find(ctx) {
      const entities = await strapi.entityService.findMany(
        "api::esail-portfolio.esail-portfolio",
        {
          ...ctx.query,
          populate:
            ctx.query.populate ||
            strapi.config["population-schemas"].collections.portfolio,
        }
      );

      return entities;
    },
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::esail-portfolio.esail-portfolio",
        ctx.query.populate ||
          strapi.config["population-schemas"].collections.portfolio
      );
    },
  })
);
