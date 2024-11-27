"use strict";

/**
 * figs-live custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-lives/next",
      handler: "figs-live.nextLive",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
