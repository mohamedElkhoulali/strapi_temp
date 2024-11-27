"use strict";

/**
 * ecole3a-landing-job router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ecole3a-landing-job.ecole3a-landing-job", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
