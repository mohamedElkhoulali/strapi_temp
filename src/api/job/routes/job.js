"use strict";

/**
 * job router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::job.job", {
  only: ["find"],
  config: {
    find: {
      policies: ["global::is-authenticated"],
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
