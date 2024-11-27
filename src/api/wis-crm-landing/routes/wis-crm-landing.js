"use strict";

/**
 * wis-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-crm-landings/:slug",
      handler: "wis-crm-landing.findOne",
    },
  ],
};
