"use strict";

/**
 * ecole3a-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ecole3a-search.ecole3a-search", {
  only: ["find"],
});
