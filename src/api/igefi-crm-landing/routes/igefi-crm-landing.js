"use strict";

/**
 * igefi-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-crm-landings/:slug",
      handler: "igefi-crm-landing.findOne",
    },
  ],
};
