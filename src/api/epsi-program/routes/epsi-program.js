"use strict";

/**
 * epsi-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-programs",
      handler: "epsi-program.find",
    },
  ],
};
