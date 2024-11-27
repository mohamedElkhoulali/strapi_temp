"use strict";

/**
 * cd-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-articles/count",
      handler: "cd-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/cd-articles/:slug",
      handler: "cd-article.findOne",
      config: {
        policies: ["global::is-authenticated"],
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
