"use strict";

/**
 * ileri-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ileri-search.ileri-search", {
  only: ["find"],
});
