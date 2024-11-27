"use strict";

/**
 * supdecom-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-blogs",
      handler: "supdecom-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
