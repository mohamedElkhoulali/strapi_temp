"use strict";

/**
 * ileri-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-taxonomies",
      handler: "ileri-taxonomy.find",
    },
  ],
};
