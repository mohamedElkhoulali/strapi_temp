"use strict";

/**
 * search router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/search",
      handler: "search.find",
    },
  ],
};
