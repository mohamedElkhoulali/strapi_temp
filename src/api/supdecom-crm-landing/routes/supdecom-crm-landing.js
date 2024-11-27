"use strict";

/**
 * supdecom-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-crm-landings/:slug",
      handler: "supdecom-crm-landing.findOne",
    },
  ],
};
