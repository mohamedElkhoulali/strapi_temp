"use strict";

/**
 * periode controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::periode.periode", ({ strapi }) => ({
  async find(ctx) {
    if (!ctx.query.populate) {
      ctx.query.populate =
        strapi.config["population-schemas"].collections.periode;
    }

    return await super.find(ctx);
  },
  async findOne(ctx) {
    if (!ctx.query.populate) {
      ctx.query.populate =
        strapi.config["population-schemas"].collections.periode;
    }

    return await super.findOne(ctx);
  },
}));
