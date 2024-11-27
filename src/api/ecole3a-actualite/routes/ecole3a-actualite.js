"use strict";

/**
 * ecole3a-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-actualites",
      handler: "ecole3a-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
