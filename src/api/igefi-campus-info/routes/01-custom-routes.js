"use strict";

/**
 * igefi-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-campus-infos/count",
      handler: "igefi-campus-info.count",
    },
    {
      method: "GET",
      path: "/igefi-campus-infos/campus/:slug",
      handler: "igefi-campus-info.findOneByCampus",
    },
  ],
};
