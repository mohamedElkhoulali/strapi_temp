"use strict";

/**
 * article router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/articles",
      handler: "article.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/articles/count",
      handler: "article.count",
    },

    {
      method: "GET",
      path: "/articles/:slug",
      handler: "article.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
