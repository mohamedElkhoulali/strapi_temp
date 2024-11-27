"use strict";

/**
 * ecole3a-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-blogs",
      handler: "ecole3a-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
