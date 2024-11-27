"use strict";

/**
 * course-funding custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/course-fundings/count",
      handler: "course-funding.count",
    },
  ],
};
