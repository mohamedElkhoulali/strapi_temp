"use strict";

/**
 * igefi-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::igefi-landing.igefi-landing", {
  only: ["find", "findOne"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
    findOne: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
