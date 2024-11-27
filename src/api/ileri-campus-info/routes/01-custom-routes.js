"use strict";

/**
 * ileri-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-campus-infos/count",
      handler: "ileri-campus-info.count",
    },
    {
      method: "GET",
      path: "/ileri-campus-infos/campus/:slug",
      handler: "ileri-campus-info.findOneByCampus",
    },
  ],
};
