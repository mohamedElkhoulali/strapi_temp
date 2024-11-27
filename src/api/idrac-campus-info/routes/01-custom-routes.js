"use strict";

/**
 * idrac-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-campus-infos/count",
      handler: "idrac-campus-info.count",
    },
    {
      method: "GET",
      path: "/idrac-campus-infos/campus/:slug",
      handler: "idrac-campus-info.findOneByCampus",
    },
  ],
};
