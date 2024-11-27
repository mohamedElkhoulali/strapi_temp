"use strict";

/**
 * figs-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-taxonomies",
      handler: "figs-taxonomy.find",
    },
  ],
};
