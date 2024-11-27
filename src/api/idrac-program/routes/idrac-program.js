"use strict";

/**
 * idrac-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-programs",
      handler: "idrac-program.find",
    },
  ],
};
