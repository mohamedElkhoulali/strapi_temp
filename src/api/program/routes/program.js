"use strict";

/**
 * landing router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/programs",
      handler: "program.find",
    },
  ],
};
