"use strict";

/**
 * school custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-cat-news/:slug",
      handler: "wis-cat-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
