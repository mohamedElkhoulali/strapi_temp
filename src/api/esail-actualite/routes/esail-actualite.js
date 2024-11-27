"use strict";

/**
 * esail-actualite router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-actualites",
      handler: "esail-actualite.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
