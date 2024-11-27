"use strict";

/**
 * supdecom-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-actualites",
      handler: "supdecom-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
