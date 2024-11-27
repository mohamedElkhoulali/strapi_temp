"use strict";

/**
 * esail-blog router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-blogs",
      handler: "esail-blog.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
