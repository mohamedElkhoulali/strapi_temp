"use strict";

/**
 * esail-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-articles/count",
      handler: "esail-article.count",
      config: {
        policies: ["global::is-authenticated"],
      },
    },
    {
      method: "GET",
      path: "/esail-articles/:slug",
      handler: "esail-article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
        policies: ["global::is-authenticated"],
      },
    },
  ],
};
