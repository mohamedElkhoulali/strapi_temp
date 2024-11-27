"use strict";

/**
 * esail-crm-landing router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-crm-landings/:action",
      handler: "esail-crm-landing.findOne",
    },
  ],
};
