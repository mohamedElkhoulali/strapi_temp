"use strict";

/**
 * ihedrea-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-crm-landings/:slug",
      handler: "ihedrea-crm-landing.findOne",
    },
  ],
};
