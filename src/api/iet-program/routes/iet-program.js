"use strict";

/**
 * iet-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-programs",
      handler: "iet-program.find",
    },
  ],
};
