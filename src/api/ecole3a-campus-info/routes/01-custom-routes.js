"use strict";

/**
 * ecole3a-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-campus-infos/count",
      handler: "ecole3a-campus-info.count",
    },
    {
      method: "GET",
      path: "/ecole3a-campus-infos/campus/:slug",
      handler: "ecole3a-campus-info.findOneByCampus",
    },
  ],
};
