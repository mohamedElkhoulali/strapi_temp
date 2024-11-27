"use strict";

/**
 * ifag-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-crm-landings/:slug",
      handler: "ifag-crm-landing.findOne",
    },
  ],
};
