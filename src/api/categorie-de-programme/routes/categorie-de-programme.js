"use strict";

/**
 * categorie-de-programme router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::categorie-de-programme.categorie-de-programme",
  {
    only: ["find", "findOne"],
    config: {
      find: {
        middlewares: ["global::exclude-unpublished"],
      },
      findOne: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  }
);
