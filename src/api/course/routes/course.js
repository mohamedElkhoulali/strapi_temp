"use strict";

/**
 * course router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::course.course", {
  only: ["find", "create"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
    create: {
      policies: ["global::is-authenticated"],
    },
  },
});
