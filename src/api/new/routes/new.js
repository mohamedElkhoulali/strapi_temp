"use strict";

/**
 * new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/news/count",
      handler: "new.count",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/news/:slug",
      handler: "new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/news",
      handler: "new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
