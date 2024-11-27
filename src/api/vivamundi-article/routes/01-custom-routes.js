"use strict";

/**
 * vivamundi-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-articles/count",
      handler: "vivamundi-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/vivamundi-articles/:slug",
      handler: "vivamundi-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
