"use strict";

/**
 * version router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/version",
      handler: "version.find",
      config: {
        policies: ["global::is-allowed-origin"],
      },
    },
  ],
};
