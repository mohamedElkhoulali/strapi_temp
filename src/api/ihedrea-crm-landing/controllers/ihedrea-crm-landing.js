"use strict";

/**
 * ihedrea-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ihedrea-crm-landing.ihedrea-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ihedrea-crm-landing.ihedrea-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
