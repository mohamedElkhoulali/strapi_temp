"use strict";

/**
 * profile custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/profiles/count",
      handler: "profile.count",
    },
  ],
};
