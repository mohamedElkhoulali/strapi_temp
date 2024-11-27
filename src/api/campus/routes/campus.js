"use strict";

/**
 * campus router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/campuses",
      handler: "campus.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/campuses/autocomplete",
      handler: "campus.autocomplete",
    },
    {
      method: "GET",
      path: "/campuses/:slug",
      handler: "campus.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
