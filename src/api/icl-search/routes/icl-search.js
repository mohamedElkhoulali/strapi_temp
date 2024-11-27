"use strict";

/**
 * icl-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::icl-search.icl-search", {
  only: ["find"],
});
