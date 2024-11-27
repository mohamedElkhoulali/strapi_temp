"use strict";

/**
 * figs-landing-live router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::figs-landing-live.figs-landing-live", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
