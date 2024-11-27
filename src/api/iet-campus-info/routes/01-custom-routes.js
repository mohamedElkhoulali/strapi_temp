"use strict";

/**
 * iet-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-campus-infos/count",
      handler: "iet-campus-info.count",
    },
    {
      method: "GET",
      path: "/iet-campus-infos/campus/:slug",
      handler: "iet-campus-info.findOneByCampus",
    },
  ],
};
