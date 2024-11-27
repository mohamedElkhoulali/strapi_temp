"use strict";

/**
 * ifag-team controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ifag-team.ifag-team",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = { picture: true };
      return await super.find(ctx);
    },
    async findOne(ctx) {
      ctx.query.populate = { picture: true };
      return await super.findOne(ctx);
    },
  })
);
