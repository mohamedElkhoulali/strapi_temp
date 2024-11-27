"use strict";

/**
 * courses custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/courses/autocomplete",
      handler: "course.autocomplete",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/courses/count",
      handler: "course.count",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/courses/filters",
      handler: "course.filters",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/courses/search",
      handler: "course.search",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/courses/category/:slug",
      handler: "course.findByCat",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/courses/:slug",
      handler: "course.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
