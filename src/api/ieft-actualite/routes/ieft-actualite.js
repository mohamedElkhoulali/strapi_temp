"use strict";

/**
 * ieft-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-actualites",
      handler: "ieft-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
