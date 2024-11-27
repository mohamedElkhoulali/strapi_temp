"use strict";

/**
 * ifag-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-blogs",
      handler: "ifag-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
