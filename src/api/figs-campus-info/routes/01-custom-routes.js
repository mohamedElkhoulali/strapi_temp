"use strict";

/**
 * figs-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-campus-infos/count",
      handler: "figs-campus-info.count",
    },
  ],
};
