"use strict";

/**
 * ecole3a-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-crm-landings/:slug",
      handler: "ecole3a-crm-landing.findOne",
    },
  ],
};
