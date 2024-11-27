"use strict";

/**
 * vivamundi-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vivamundi-crm-landing.vivamundi-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::vivamundi-crm-landing.vivamundi-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
