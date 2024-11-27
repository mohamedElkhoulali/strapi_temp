"use strict";

/**
 * campus-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/campus-infos",
      handler: "campus-info.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/campus-infos/campus/:slug",
      handler: "campus-info.findOneByCampus",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
