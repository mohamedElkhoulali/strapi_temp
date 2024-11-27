"use strict";

/**
 * cd-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-taxonomies",
      handler: "cd-taxonomy.find",
    },
  ],
};
