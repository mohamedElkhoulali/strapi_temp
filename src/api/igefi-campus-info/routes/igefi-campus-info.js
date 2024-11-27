"use strict";

/**
 * igefi-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::igefi-campus-info.igefi-campus-info", {
  only: ["find", "findOne"],
});
