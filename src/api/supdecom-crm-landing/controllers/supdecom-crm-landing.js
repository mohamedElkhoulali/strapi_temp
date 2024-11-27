"use strict";

/**
 * supdecom-crm-landing controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::supdecom-crm-landing.supdecom-crm-landing",
  ({ strapi }) => ({
    async findOne(ctx) {
      return await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::supdecom-crm-landing.supdecom-crm-landing",
        strapi.config["population-schemas"].collections.crmLanding
      );
    },
  })
);
