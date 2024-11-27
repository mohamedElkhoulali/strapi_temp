"use strict";

/**
 * school custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-cat-news/:slug",
      handler: "igefi-cat-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
