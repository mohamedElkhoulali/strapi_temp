"use strict";

/**
 * supdecom-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::supdecom-campus-info.supdecom-campus-info", {
  only: ["find", "findOne"],
});
