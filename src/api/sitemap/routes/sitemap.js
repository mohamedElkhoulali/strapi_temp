"use strict";

/**
 * sitemap router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/sitemap",
      handler: "sitemap.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
