"use strict";

/**
 * ifag-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ifag-crm-landing.ifag-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::ifag-crm-landing.ifag-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
