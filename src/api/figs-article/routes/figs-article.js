"use strict";

/**
 * figs-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::figs-article.figs-article", {
  only: ["find", "create"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
      policies: ["global::is-authenticated"],
    },
    create: {
      policies: ["global::is-authenticated"],
    },
  },
});