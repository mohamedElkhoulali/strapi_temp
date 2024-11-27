"use strict";

/**
 * esail-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::esail-crm-link.esail-crm-link", {
  only: ["find", "findOne"],
});
