"use strict";

/**
 * ileri-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ileri-campus-info.ileri-campus-info", {
  only: ["find", "findOne"],
});
