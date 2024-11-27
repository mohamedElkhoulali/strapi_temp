"use strict";

/**
 * ihedrea-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ihedrea-article.ihedrea-article", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
      policies: ["global::is-authenticated"],
    },
  },
});
