"use strict";

/**
 * cd-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-blogs",
      handler: "cd-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
