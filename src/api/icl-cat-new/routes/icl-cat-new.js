"use strict";

/**
 * icl-cat-new router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::icl-cat-new.icl-cat-new", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
