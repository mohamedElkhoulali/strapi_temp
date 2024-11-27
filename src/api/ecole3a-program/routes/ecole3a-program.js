"use strict";

/**
 * ecole3a-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-programs",
      handler: "ecole3a-program.find",
    },
  ],
};
