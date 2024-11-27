"use strict";

/**
 * igefi-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-actualites",
      handler: "igefi-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
