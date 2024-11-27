"use strict";

/**
 * ieft-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-campus-infos/count",
      handler: "ieft-campus-info.count",
    },
    {
      method: "GET",
      path: "/ieft-campus-infos/campus/:slug",
      handler: "ieft-campus-info.findOneByCampus",
    },
  ],
};
