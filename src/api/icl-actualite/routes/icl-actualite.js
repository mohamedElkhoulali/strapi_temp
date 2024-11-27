"use strict";

/**
 * icl-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-actualites",
      handler: "icl-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
