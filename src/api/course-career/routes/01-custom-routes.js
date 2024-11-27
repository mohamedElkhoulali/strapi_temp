"use strict";

/**
 * course-career custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/course-careers/count",
      handler: "course-career.count",
    },
  ],
};
