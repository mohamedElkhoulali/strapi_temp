"use strict";

/**
 * idrac-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-articles/count",
      handler: "idrac-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/idrac-articles/:slug",
      handler: "idrac-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
