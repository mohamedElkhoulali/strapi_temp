"use strict";

/**
 * idrac-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-crm-landings/:slug",
      handler: "idrac-crm-landing.findOne",
    },
  ],
};
