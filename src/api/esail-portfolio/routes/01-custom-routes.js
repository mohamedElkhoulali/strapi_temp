"use strict";

/**
 * esail-portfolio custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-portfolios/:slug",
      handler: "esail-portfolio.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
