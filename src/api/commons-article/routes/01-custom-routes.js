"use strict";

/**
 * commons-article custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/commons-articles/count",
      handler: "commons-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/commons-articles/:slug",
      handler: "commons-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
