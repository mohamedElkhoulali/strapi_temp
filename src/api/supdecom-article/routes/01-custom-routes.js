"use strict";

/**
 * supdecom-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-articles/count",
      handler: "supdecom-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/supdecom-articles/:slug",
      handler: "supdecom-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
