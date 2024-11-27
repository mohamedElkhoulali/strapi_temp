"use strict";

/**
 * icl-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::icl-crm-landing.icl-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::icl-crm-landing.icl-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
