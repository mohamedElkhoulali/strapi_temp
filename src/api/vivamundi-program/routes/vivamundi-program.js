"use strict";

/**
 * vivamundi-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-programs",
      handler: "vivamundi-program.find",
    },
  ],
};
