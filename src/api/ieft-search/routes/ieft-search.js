"use strict";

/**
 * ieft-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ieft-search.ieft-search", {
  only: ["find"],
});
