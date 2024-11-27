"use strict";

/**
 * ecole3a-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-articles/count",
      handler: "ecole3a-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/ecole3a-articles/:slug",
      handler: "ecole3a-article.findOne",
      config: {
        policies: ["global::is-authenticated"],
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
