"use strict";

/**
 * wis-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-campus-infos/count",
      handler: "wis-campus-info.count",
    },
    {
      method: "GET",
      path: "/wis-campus-infos/campus/:slug",
      handler: "wis-campus-info.findOneByCampus",
    },
  ],
};
