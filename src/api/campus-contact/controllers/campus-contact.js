"use strict";

/**
 * campus-contact controller
 */

const { userHelper } = strapi.config.functions.helpers;
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::campus-contact.campus-contact",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.config.functions.schools.findForEachSchools(
        ctx,
        "api::campus-contact.campus-contact",
        ctx.query.populate ||
          strapi.config["population-schemas"].collections.campusContact
      );
    },
    async findOne(ctx) {
      return await strapi.config.functions.schools.findOneById(
        ctx,
        "api::campus-contact.campus-contact",
        ctx.query.populate ||
          strapi.config["population-schemas"].collections.campusContact
      );
    },
    async count(ctx) {
      return await strapi.config.functions.schools.count(
        ctx,
        "api::campus-contact.campus-contact"
      );
    },
    async all(ctx) {
      if (userHelper.isContentManagerUser(ctx) || userHelper.isGlobalUser(ctx)) {
        ctx.query.populate =
          ctx.query.populate ||
          strapi.config["population-schemas"].collections.campusContact;
        return await super.find(ctx);
      }
    },
  })
);
