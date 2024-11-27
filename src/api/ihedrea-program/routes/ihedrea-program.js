"use strict";

/**
 * ihedrea-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-programs",
      handler: "ihedrea-program.find",
    },
  ],
};
