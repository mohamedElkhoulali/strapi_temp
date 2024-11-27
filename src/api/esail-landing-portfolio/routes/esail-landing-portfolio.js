"use strict";

/**
 * esail-landing-portfolio router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-landing-portfolios",
      handler: "esail-landing-portfolio.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
