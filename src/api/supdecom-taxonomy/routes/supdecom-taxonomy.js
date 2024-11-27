"use strict";

/**
 * supdecom-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-taxonomies",
      handler: "supdecom-taxonomy.find",
    },
  ],
};
