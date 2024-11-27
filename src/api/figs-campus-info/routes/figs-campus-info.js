"use strict";

/**
 * figs-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::figs-campus-info.figs-campus-info", {
  only: ["find", "findOne"],
});
