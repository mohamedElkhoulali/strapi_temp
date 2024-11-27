"use strict";

/**
 * ieft-cat-new router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ieft-cat-new.ieft-cat-new", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
