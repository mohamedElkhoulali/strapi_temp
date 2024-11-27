"use strict";

/**
 * esail-team controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::esail-team.esail-team",
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