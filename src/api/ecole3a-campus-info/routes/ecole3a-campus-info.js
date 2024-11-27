"use strict";

/**
 * ecole3a-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ecole3a-campus-info.ecole3a-campus-info", {
  only: ["find", "findOne"],
});
