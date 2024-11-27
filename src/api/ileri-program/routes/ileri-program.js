"use strict";

/**
 * ileri-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-programs",
      handler: "ileri-program.find",
    },
  ],
};
