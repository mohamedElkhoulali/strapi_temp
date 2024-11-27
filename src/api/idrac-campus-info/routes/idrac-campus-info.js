"use strict";

/**
 * idrac-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::idrac-campus-info.idrac-campus-info", {
  only: ["find", "findOne"],
});
