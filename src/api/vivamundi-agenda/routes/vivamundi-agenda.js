"use strict";

/**
 * vivamundi-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::vivamundi-agenda.vivamundi-agenda", {
  only: ["find"],
});
