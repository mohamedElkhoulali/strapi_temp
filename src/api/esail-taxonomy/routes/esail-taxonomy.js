"use strict";

/**
 * esail-taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-taxonomies",
      handler: "esail-taxonomy.find",
    },
  ],
};
