"use strict";

/**
 * ecole3a-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-taxonomies",
      handler: "ecole3a-taxonomy.find",
    },
  ],
};
