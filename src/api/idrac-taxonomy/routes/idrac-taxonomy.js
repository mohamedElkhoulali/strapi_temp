"use strict";

/**
 * idrac-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-taxonomies",
      handler: "idrac-taxonomy.find",
    },
  ],
};
