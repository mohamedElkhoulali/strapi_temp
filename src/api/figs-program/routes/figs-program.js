"use strict";

/**
 * figs-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-programs",
      handler: "figs-program.find",
    },
  ],
};
