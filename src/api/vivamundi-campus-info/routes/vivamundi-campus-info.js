"use strict";

/**
 * vivamundi-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::vivamundi-campus-info.vivamundi-campus-info", {
  only: ["find", "findOne"],
});
