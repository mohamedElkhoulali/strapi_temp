"use strict";

/**
 * esail-search router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::esail-search.esail-search", {
  only: ["find"],
});
