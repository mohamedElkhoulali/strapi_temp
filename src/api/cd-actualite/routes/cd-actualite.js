"use strict";

/**
 * cd-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-actualites",
      handler: "cd-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
