"use strict";

/**
 * school custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-cat-news/:slug",
      handler: "ecole3a-cat-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
