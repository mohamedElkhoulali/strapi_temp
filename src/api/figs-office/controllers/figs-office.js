"use strict";

/**
 * figs-office controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-office.figs-office",
  ({ strapi }) => ({
    async find(ctx) {
      return await await strapi.entityService.findMany(
        "api::figs-office.figs-office",
        {
          ...ctx.query,
          populate: { ...ctx.populate, flag: true },
        }
      );
    },
  })
);
