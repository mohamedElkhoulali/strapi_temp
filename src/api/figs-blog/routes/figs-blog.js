"use strict";

/**
 * figs-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-blogs",
      handler: "figs-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
