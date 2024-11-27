"use strict";

/**
 * icl-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-programs",
      handler: "icl-program.find",
    },
  ],
};
