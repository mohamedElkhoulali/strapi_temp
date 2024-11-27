"use strict";

/**
 * figs-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-actualites",
      handler: "figs-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
