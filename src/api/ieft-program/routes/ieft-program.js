"use strict";

/**
 * ieft-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-programs",
      handler: "ieft-program.find",
    },
  ],
};
