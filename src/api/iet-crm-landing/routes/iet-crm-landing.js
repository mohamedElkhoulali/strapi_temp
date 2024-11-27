"use strict";

/**
 * iet-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-crm-landings/:slug",
      handler: "iet-crm-landing.findOne",
    },
  ],
};
