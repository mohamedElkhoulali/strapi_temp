"use strict";

/**
 * cd-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-programs",
      handler: "cd-program.find",
    },
  ],
};
