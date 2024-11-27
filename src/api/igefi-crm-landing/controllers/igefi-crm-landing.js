"use strict";

/**
 * igefi-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::igefi-crm-landing.igefi-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::igefi-crm-landing.igefi-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
