"use strict";

/**
 * supdecom-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::supdecom-search.supdecom-search", {
  only: ["find"],
});
