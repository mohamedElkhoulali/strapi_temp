"use strict";

/**
 * figs-office router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::figs-office.figs-office", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
