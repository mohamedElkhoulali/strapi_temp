"use strict";

/**
 * supdecom-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-campus-infos/count",
      handler: "supdecom-campus-info.count",
    },
    {
      method: "GET",
      path: "/supdecom-campus-infos/campus/:slug",
      handler: "supdecom-campus-info.findOneByCampus",
    },
  ],
};
