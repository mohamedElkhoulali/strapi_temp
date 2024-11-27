"use strict";

/**
 * ifag-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ifag-article.ifag-article", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
      policies: ["global::is-authenticated"],
    },
  },
});
