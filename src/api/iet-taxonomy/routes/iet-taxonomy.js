"use strict";

/**
 * iet-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-taxonomies",
      handler: "iet-taxonomy.find",
    },
  ],
};
