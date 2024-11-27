"use strict";

/**
 * epsi-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-crm-landings/:slug",
      handler: "epsi-crm-landing.findOne",
    },
  ],
};
