"use strict";

/**
 * iet-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::iet-article.iet-article", {
  only: ["find"],
  config: {
    find: {
      policies: ["global::is-authenticated"],
    },
  },
});
