"use strict";

/**
 * menu-enrichi router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::menu-enrichi.menu-enrichi", {
  only: ["find", "findOne"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
