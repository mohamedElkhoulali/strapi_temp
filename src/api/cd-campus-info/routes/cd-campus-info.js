"use strict";

/**
 * cd-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::cd-campus-info.cd-campus-info", {
  only: ["find", "findOne"],
});
