"use strict";

/**
 * ieft-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ieft-crm-landing.ieft-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ieft-crm-landing.ieft-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
