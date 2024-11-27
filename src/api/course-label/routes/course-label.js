"use strict";

/**
 * course-label router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::course-label.course-label", {
  only: ["find", "findOne"],
});
