"use strict";

/**
 * iet-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-articles/count",
      handler: "iet-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/iet-articles/:slug",
      handler: "iet-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
