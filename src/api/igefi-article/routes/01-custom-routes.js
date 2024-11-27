"use strict";

/**
 * igefi-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-articles/count",
      handler: "igefi-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/igefi-articles/:slug",
      handler: "igefi-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
