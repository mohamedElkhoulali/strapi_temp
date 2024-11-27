"use strict";

/**
 * ihedrea-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-campus-infos/count",
      handler: "ihedrea-campus-info.count",
    },
    {
      method: "GET",
      path: "/ihedrea-campus-infos/campus/:slug",
      handler: "ihedrea-campus-info.findOneByCampus",
    },
  ],
};
