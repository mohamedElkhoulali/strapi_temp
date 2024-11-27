"use strict";

/**
 * ifag-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-taxonomies",
      handler: "ifag-taxonomy.find",
    },
  ],
};
