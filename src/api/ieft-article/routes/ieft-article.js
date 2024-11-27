"use strict";

/**
 * ieft-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ieft-article.ieft-article", {
  only: ["find"],
  config: {
    find: {
      policies: ["global::is-authenticated"],
    },
  },
});
