"use strict";

/**
 * iet-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::iet-campus-info.iet-campus-info", {
  only: ["find", "findOne"],
});
