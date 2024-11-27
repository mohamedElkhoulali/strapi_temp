"use strict";

/**
 * epsi-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-campus-infos/count",
      handler: "epsi-campus-info.count",
    },
    {
      method: "GET",
      path: "/epsi-campus-infos/campus/:slug",
      handler: "epsi-campus-info.findOneByCampus",
    },
  ],
};
