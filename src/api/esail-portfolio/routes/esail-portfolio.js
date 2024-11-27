"use strict";

/**
 * esail-portfolio router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::esail-portfolio.esail-portfolio", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
    create: {
      policies: ["global::is-authenticated"],
    },
  },
});
