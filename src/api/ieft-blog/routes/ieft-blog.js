"use strict";

/**
 * ieft-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-blogs",
      handler: "ieft-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
