"use strict";

/**
 * wis-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-blogs",
      handler: "wis-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
