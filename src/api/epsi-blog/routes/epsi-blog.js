"use strict";

/**
 * epsi-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-blogs",
      handler: "epsi-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
