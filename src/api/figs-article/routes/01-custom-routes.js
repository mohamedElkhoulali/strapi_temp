"use strict";

/**
 * figs-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-articles/count",
      handler: "figs-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/figs-articles/:slug",
      handler: "figs-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
