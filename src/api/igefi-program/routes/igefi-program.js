"use strict";

/**
 * igefi-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-programs",
      handler: "igefi-program.find",
    },
  ],
};
