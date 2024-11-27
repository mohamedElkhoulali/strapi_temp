"use strict";

/**
 * cd-cat-news custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-cat-news/:slug",
      handler: "cd-cat-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
