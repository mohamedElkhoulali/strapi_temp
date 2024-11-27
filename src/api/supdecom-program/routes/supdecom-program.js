"use strict";

/**
 * supdecom-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-programs",
      handler: "supdecom-program.find",
    },
  ],
};
