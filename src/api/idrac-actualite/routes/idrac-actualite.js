"use strict";

/**
 * idrac-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-actualites",
      handler: "idrac-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
