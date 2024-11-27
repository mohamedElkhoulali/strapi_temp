"use strict";

/**
 * school custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-cat-news/:slug",
      handler: "ieft-cat-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
