"use strict";

/**
 * wis-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::wis-agenda.wis-agenda", {
  only: ["find"],
});
