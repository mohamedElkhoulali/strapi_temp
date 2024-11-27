"use strict";

/**
 * courses custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/homepage",
      handler: "homepage.findSingle",
    },
  ],
};
