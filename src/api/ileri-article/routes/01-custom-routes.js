"use strict";

/**
 * ileri-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-articles/count",
      handler: "ileri-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/ileri-articles/:slug",
      handler: "ileri-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
