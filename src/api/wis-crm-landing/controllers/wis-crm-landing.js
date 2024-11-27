"use strict";

/**
 * wis-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::wis-crm-landing.wis-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::wis-crm-landing.wis-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
