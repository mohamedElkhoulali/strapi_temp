"use strict";

/**
 * wis-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::wis-article.wis-article", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
      policies: ["global::is-authenticated"],
    },
  },
});
