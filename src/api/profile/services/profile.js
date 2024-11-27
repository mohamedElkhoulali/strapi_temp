"use strict";

/**
 * profile service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::profile.profile", ({ strapi }) => ({
  async getUserProfile(ctx) {
    return await strapi.config.functions.profile.getUserProfileFromContext(ctx);
  },
}));
