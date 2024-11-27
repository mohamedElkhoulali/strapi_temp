"use strict";

/**
 * epsi-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::epsi-search.epsi-search", {
  only: ["find"],
});
