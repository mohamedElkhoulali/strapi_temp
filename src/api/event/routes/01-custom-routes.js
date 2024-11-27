"use strict";

/**
 * courses custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/count",
      handler: "event.count",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/events/:slug",
      handler: "event.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
