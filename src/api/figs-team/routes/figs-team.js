"use strict";

/**
 * figs-team router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::figs-team.figs-team", {
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
