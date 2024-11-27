"use strict";

/**
 * igefi-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::igefi-article.igefi-article", {
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
