"use strict";

/**
 * epsi-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::epsi-landing.epsi-landing", {
  only: ["find", "findOne"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
    findOne: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
