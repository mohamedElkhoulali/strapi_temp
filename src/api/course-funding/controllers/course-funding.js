"use strict";

/**
 * course-funding controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::course-funding.course-funding",
  ({ strapi }) => ({
    async count(ctx) {
      const { data } = await super.find(ctx);
      return data.length || 0;
    },
  })
);
