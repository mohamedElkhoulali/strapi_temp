"use strict";

/**
 * icl-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-articles/count",
      handler: "icl-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/icl-articles/:slug",
      handler: "icl-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
