"use strict";

/**
 * landing router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/landings/:slug",
      handler: "landing.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/landings",
      handler: "landing.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
