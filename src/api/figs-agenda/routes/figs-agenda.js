"use strict";

/**
 * figs-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::figs-agenda.figs-agenda", {
  only: ["find"],
});
