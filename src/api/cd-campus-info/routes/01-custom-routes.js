"use strict";

/**
 * cd-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-campus-infos/count",
      handler: "cd-campus-info.count",
    },
  ],
};
