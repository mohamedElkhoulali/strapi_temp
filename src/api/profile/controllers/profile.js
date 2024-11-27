"use strict";

/**
 * profile controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::profile.profile", ({ strapi }) => ({
  async find(ctx) {
    ctx.query.populate = {
      courses: true,
    };
    return super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query.populate = {
      courses: true,
    };
    return super.findOne(ctx);
  },
  async count(ctx) {
    const { data } = await this.find(ctx);
    return data.length || 0;
  },
}));
