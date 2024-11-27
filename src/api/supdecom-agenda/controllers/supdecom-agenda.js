"use strict";

/**
 * supdecom-agenda controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::supdecom-agenda.supdecom-agenda",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.config.functions.namespace.findSingle(
        ctx,
        "agenda",
        ctx.query.populate ||
          strapi.config["population-schemas"].singleTypes.agenda
      );
    },
  })
);
