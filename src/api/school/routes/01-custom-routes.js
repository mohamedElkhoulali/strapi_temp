"use strict";

/**
 * school custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/schools/count",
      handler: "school.count",
    },
    {
      method: "GET",
      path: "/schools/campus/:slug",
      handler: "school.findByCampus",
    },
  ],
};
