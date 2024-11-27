"use strict";

/**
 * icl-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::icl-agenda.icl-agenda", {
  only: ["find"],
});
