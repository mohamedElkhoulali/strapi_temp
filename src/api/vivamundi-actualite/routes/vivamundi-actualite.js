"use strict";

/**
 * vivamundi-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-actualites",
      handler: "vivamundi-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
