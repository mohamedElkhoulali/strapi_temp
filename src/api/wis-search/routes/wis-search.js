"use strict";

/**
 * wis-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::wis-search.wis-search", {
  only: ["find"],
});
