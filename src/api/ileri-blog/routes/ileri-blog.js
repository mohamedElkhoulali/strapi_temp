"use strict";

/**
 * ileri-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-blogs",
      handler: "ileri-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
