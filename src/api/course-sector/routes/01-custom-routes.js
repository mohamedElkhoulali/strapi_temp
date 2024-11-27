"use strict";

/**
 * course-sector custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/course-sectors/count",
      handler: "course-sector.count",
    },
  ],
};
