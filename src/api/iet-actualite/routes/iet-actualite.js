"use strict";

/**
 * iet-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-actualites",
      handler: "iet-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
