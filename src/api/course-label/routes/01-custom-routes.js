"use strict";

/**
 * course-label custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/course-labels/count",
      handler: "course-label.count",
    },
  ],
};
