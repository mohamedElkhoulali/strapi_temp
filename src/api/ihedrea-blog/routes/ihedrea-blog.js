"use strict";

/**
 * ihedrea-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-blogs",
      handler: "ihedrea-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
