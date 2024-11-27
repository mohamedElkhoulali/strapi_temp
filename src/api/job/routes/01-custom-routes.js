"use strict";

/**
 * cd-articles custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/jobs/all",
      handler: "job.findAll",
      config: {
        policies: ["global::is-authenticated"],
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/jobs/:slug",
      handler: "job.findOne",
      config: {
        policies: ["global::is-authenticated"],
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
