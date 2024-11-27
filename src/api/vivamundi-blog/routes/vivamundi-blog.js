"use strict";

/**
 * vivamundi-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-blogs",
      handler: "vivamundi-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
