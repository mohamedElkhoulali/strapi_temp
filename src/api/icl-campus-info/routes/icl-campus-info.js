"use strict";

/**
 * icl-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::icl-campus-info.icl-campus-info", {
  only: ["find", "findOne"],
});
