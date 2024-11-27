"use strict";

/**
 * campus-landing custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/campus-landing",
      handler: "campus-landing.findSingle",
    },
  ],
};
