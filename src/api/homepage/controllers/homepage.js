"use strict";

const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;

/**
 * homepage controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::homepage.homepage",
  ({ strapi }) => ({
    async findSingle(ctx) {
      const result = await strapi.entityService.findMany(
        "api::homepage.homepage",
        {
          ...ctx.query,
          filters: {
            website: { id: ctx.state.user.id },
          },
          populate: ctx.query.populate || strapi.config["population-schemas"].collections.homepage,
          limit: 1,
        }
      );

      if (result.length > 0) {
        ctx.body = await contentAPI.output(
          result[0],
          strapi.getModel("api::homepage.homepage"),
          ctx.state.auth
        );
      }
    },
  })
);
