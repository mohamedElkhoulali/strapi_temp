"use strict";

/**
 * categorie-de-programmes custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/categorie-de-programmes/count",
      handler: "categorie-de-programme.count",
    },
    {
      method: "GET",
      path: "/categorie-de-programmes/autocomplete",
      handler: "categorie-de-programme.autocomplete",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
