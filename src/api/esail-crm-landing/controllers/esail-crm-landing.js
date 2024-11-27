"use strict";

/**
 * esail-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::esail-crm-landing.esail-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      const {
        params: { action },
      } = ctx;

      ctx.query.filters = {
        ...ctx.query?.filters,
        action: action,
      };

      const entities = await strapi.entityService.findMany(
        "api::esail-crm-landing.esail-crm-landing",
        {
          ...ctx.query,
          populate:
            ctx.query.populate ||
            strapi.config["population-schemas"].collections.crmLanding,
        }
      );

      if (entities.length) return entities[0];
    },
  })
);
