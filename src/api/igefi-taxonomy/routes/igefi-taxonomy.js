"use strict";

/**
 * igefi-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-taxonomies",
      handler: "igefi-taxonomy.find",
    },
  ],
};
