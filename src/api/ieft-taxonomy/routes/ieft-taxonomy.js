"use strict";

/**
 * ieft-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-taxonomies",
      handler: "ieft-taxonomy.find",
    },
  ],
};
