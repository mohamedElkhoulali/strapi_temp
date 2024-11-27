"use strict";

/**
 * ihedrea-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ihedrea-campus-info.ihedrea-campus-info", {
  only: ["find", "findOne"],
});
