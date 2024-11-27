"use strict";

/**
 * vivamundi-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-taxonomies",
      handler: "vivamundi-taxonomy.find",
    },
  ],
};
