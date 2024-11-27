"use strict";

/**
 * global-new custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/global-news",
      handler: "global-new.findNews",
    },
  ],
};
