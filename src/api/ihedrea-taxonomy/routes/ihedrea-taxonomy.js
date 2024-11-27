"use strict";

/**
 * ihedrea-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-taxonomies",
      handler: "ihedrea-taxonomy.find",
    },
  ],
};
