"use strict";

/**
 * ileri-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ileri-crm-landing.ileri-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ileri-crm-landing.ileri-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
