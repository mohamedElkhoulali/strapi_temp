"use strict";

/**
 * epsi-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-articles/count",
      handler: "epsi-article.count",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/epsi-articles/:slug",
      handler: "epsi-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
