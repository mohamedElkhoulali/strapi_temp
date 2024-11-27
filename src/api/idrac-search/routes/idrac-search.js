"use strict";

/**
 * idrac-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::idrac-search.idrac-search", {
  only: ["find"],
});
