"use strict";

/**
 * ieft-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-crm-landings/:slug",
      handler: "ieft-crm-landing.findOne",
    },
  ],
};
