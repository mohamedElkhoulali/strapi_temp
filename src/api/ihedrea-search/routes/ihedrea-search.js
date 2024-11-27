"use strict";

/**
 * ihedrea-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ihedrea-search.ihedrea-search", {
  only: ["find"],
});
