"use strict";

/**
 * icl-landing-job router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::icl-landing-job.icl-landing-job", {
  only: ["find"],
  config: {
    find: {
      middlewares: ["global::exclude-unpublished"],
    },
  },
});
