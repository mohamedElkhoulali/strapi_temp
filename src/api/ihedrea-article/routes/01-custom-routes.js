"use strict";

/**
 * ihedrea-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-articles/count",
      handler: "ihedrea-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/ihedrea-articles/:slug",
      handler: "ihedrea-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
