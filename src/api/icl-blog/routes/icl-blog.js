"use strict";

/**
 * icl-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-blogs",
      handler: "icl-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
