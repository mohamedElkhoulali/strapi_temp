"use strict";

/**
 * wis-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-actualites",
      handler: "wis-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
