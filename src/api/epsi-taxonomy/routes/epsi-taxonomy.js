"use strict";

/**
 * epsi-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-taxonomies",
      handler: "epsi-taxonomy.find",
    },
  ],
};
