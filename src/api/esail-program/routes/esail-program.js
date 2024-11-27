"use strict";

/**
 * esail-program router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-programs",
      handler: "esail-program.find",
    },
  ],
};
