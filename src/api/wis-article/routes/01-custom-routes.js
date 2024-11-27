"use strict";

/**
 * wis-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-articles/count",
      handler: "wis-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/wis-articles/:slug",
      handler: "wis-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
