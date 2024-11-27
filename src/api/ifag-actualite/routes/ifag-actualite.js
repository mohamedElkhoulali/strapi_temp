"use strict";

/**
 * ifag-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-actualites",
      handler: "ifag-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
