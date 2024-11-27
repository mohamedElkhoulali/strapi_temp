"use strict";

/**
 * igefi-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::igefi-agenda.igefi-agenda", {
  only: ["find"],
});
