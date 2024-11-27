"use strict";

/**
 * wis-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::wis-campus-info.wis-campus-info", {
  only: ["find", "findOne"],
});
