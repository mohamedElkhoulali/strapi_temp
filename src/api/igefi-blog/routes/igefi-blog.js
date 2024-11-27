"use strict";

/**
 * igefi-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-blogs",
      handler: "igefi-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
