"use strict";

/**
 * ieft-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ieft-campus-info.ieft-campus-info", {
  only: ["find", "findOne"],
});
