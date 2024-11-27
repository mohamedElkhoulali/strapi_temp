"use strict";

/**
 * idrac-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::idrac-crm-landing.idrac-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::idrac-crm-landing.idrac-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
