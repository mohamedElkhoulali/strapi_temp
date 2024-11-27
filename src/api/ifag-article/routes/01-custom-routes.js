"use strict";

/**
 * ifag-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-articles/count",
      handler: "ifag-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/ifag-articles/:slug",
      handler: "ifag-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
