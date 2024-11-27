"use strict";

/**
 * vivamundi-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-campus-infos/count",
      handler: "vivamundi-campus-info.count",
    },
    {
      method: "GET",
      path: "/vivamundi-campus-infos/campus/:slug",
      handler: "vivamundi-campus-info.findOneByCampus",
    },
  ],
};
