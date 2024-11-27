"use strict";

/**
 * wis-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-programs",
      handler: "wis-program.find",
    },
  ],
};
