"use strict";

/**
 * course-skills-unit custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/course-skills-units/count",
      handler: "course-skills-unit.count",
    },
  ],
};
