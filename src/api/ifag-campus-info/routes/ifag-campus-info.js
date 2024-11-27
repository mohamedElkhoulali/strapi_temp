"use strict";

/**
 * ifag-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ifag-campus-info.ifag-campus-info", {
  only: ["find", "findOne"],
});
