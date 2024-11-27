"use strict";

/**
 * course-career router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::course-career.course-career", {
  only: ["find", "findOne"],
});
