"use strict";

/**
 * cd-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-news",
      handler: "cd-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/cd-blog",
      handler: "cd-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/cd-news/count",
      handler: "cd-new.count",
    },
    {
      method: "GET",
      path: "/cd-news/:slug",
      handler: "cd-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
