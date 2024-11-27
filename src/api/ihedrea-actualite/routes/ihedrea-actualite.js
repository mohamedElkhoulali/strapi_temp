"use strict";

/**
 * ihedrea-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-actualites",
      handler: "ihedrea-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
