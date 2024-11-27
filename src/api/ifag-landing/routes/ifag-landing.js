"use strict";

/**
 * ifag-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ifag-landing.ifag-landing", {
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
