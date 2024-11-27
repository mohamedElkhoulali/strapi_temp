"use strict";

/**
 * wis-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-taxonomies",
      handler: "wis-taxonomy.find",
    },
  ],
};
