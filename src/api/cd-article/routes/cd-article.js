"use strict";

/**
 * cd-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::cd-article.cd-article", {
  only: ["find"],
  config: {
    find: {
      policies: ["global::is-authenticated"],
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
