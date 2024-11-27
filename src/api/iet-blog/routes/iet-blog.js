"use strict";

/**
 * iet-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-blogs",
      handler: "iet-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
