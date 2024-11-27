"use strict";

/**
 * vivamundi-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::vivamundi-search.vivamundi-search", {
  only: ["find"],
});
