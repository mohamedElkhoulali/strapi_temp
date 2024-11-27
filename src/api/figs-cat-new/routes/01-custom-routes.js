"use strict";

/**
 * figs-cat-news custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-cat-news/:slug",
      handler: "figs-cat-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
