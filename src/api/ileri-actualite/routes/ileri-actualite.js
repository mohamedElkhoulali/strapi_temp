"use strict";

/**
 * ileri-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-actualites",
      handler: "ileri-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
