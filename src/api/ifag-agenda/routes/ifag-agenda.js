"use strict";

/**
 * ifag-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ifag-agenda.ifag-agenda", {
  only: ["find"],
});
