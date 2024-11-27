"use strict";

/**
 * icl-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-taxonomies",
      handler: "icl-taxonomy.find",
    },
  ],
};
