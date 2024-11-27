"use strict";

/**
 * idrac-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-blogs",
      handler: "idrac-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
