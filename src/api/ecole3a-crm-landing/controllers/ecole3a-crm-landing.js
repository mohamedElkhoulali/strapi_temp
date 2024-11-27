"use strict";

/**
 * ecole3a-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ecole3a-crm-landing.ecole3a-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ecole3a-crm-landing.ecole3a-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
