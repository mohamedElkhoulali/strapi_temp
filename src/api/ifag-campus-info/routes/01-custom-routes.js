"use strict";

/**
 * ifag-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-campus-infos/count",
      handler: "ifag-campus-info.count",
    },
    {
      method: "GET",
      path: "/ifag-campus-infos/campus/:slug",
      handler: "ifag-campus-info.findOneByCampus",
    },
  ],
};
