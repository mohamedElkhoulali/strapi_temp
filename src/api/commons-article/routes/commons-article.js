"use strict";

/**
 * commons-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::commons-article.commons-article", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
      policies: ["global::is-authenticated"],
    },
  },
});
