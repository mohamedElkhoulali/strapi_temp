"use strict";

/**
 * school custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-cat-news/:slug",
      handler: "supdecom-cat-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
