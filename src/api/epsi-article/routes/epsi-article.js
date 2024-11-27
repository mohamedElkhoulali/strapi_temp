"use strict";

/**
 * epsi-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::epsi-article.epsi-article", {
  only: ["find"],
  config: {
    find: {
      policies: ["global::is-authenticated"],
    },
  },
});
