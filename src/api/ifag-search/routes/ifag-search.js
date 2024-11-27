"use strict";

/**
 * ifag-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ifag-search.ifag-search", {
  only: ["find"],
});
