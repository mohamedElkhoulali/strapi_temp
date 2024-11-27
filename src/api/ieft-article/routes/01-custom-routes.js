"use strict";

/**
 * ieft-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-articles/count",
      handler: "ieft-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/ieft-articles/:slug",
      handler: "ieft-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
