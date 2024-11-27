"use strict";

/**
 * epsi-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-actualites",
      handler: "epsi-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
