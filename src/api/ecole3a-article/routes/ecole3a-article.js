"use strict";

/**
 * ecole3a-article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ecole3a-article.ecole3a-article", {
  only: ["find"],
  config: {
    find: {
      policies: ["global::is-authenticated"],
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
