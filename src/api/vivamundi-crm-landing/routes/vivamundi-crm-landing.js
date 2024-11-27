"use strict";

/**
 * vivamundi-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-crm-landings/:slug",
      handler: "vivamundi-crm-landing.findOne",
    },
  ],
};
