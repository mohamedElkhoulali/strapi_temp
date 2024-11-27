"use strict";

/**
 * course-funding router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::course-funding.course-funding", {
  only: ["find", "findOne"],
});
