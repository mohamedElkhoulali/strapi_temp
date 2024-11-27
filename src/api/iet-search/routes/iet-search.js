"use strict";

/**
 * iet-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::iet-search.iet-search", {
  only: ["find"],
});
