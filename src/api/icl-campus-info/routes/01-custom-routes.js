"use strict";

/**
 * icl-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-campus-infos/count",
      handler: "icl-campus-info.count",
    },
    {
      method: "GET",
      path: "/icl-campus-infos/campus/:slug",
      handler: "icl-campus-info.findOneByCampus",
    },
  ],
};
