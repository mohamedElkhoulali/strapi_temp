"use strict";

/**
 * iet-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::iet-crm-landing.iet-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::iet-crm-landing.iet-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
