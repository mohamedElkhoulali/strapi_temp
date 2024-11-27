"use strict";

/**
 * idrac-team router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::idrac-team.idrac-team", {
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
