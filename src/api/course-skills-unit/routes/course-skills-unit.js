"use strict";

/**
 * course-skills-unit router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::course-skills-unit.course-skills-unit",
  {
    only: ["find", "findOne"],
  }
);
