"use strict";

/**
 * agenda router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/agenda",
      handler: "agenda.find",
    },
  ],
};
