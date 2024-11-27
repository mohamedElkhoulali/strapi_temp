"use strict";

/**
 * brochure router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/brochures",
      handler: "brochure.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
