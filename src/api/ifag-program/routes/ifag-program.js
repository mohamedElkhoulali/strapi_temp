"use strict";

/**
 * ifag-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-programs",
      handler: "ifag-program.find",
    },
  ],
};
