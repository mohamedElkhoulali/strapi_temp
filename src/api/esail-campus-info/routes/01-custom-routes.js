"use strict";

/**
 * esail-campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-campus-infos/count",
      handler: "esail-campus-info.count",
    },
    {
      method: "GET",
      path: "/esail-campus-infos/campus/:slug",
      handler: "esail-campus-info.findOneByCampus",
    },
  ],
};
