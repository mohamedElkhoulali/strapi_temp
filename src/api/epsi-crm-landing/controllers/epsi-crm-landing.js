"use strict";

/**
 * epsi-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::epsi-crm-landing.epsi-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::epsi-crm-landing.epsi-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
