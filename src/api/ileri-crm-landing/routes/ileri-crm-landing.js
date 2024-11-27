"use strict";

/**
 * ileri-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-crm-landings/:slug",
      handler: "ileri-crm-landing.findOne",
    },
  ],
};
