"use strict";

/**
 * epsi-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::epsi-campus-info.epsi-campus-info", {
  only: ["find", "findOne"],
});
