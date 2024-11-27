"use strict";

/**
 * crm-landing router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/crm-landings/:action",
      handler: "crm-landing.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
