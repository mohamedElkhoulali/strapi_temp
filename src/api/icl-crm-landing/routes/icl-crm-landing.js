"use strict";

/**
 * icl-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-crm-landings/:slug",
      handler: "icl-crm-landing.findOne",
    },
  ],
};
