"use strict";

/**
 * course-sector router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::course-sector.course-sector", {
  only: ["find", "findOne"],
});
