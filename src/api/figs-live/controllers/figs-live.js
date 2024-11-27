"use strict";

/**
 * figs-live controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::figs-live.figs-live",
  ({ strapi }) => ({
    async nextLive(ctx) {
      const now = new Date();

      const nextLive = await strapi.entityService.findMany(
        "api::figs-live.figs-live",
        {
          ...ctx.query,
          filters: {
            publishDate: { $gte: now.toISOString() },
          },
          sort: {
            publishDate: "asc",
          },
          populate: {
            ...ctx.populate,
            posterframe: true,
          },
          limit: 1,
        }
      );

      if (nextLive.length) {
        return nextLive[0];
      }
    },
  })
);
