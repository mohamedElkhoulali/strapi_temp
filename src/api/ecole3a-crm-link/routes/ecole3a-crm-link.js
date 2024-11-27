"use strict";

/**
 * ecole3a-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ecole3a-crm-link.ecole3a-crm-link", {
  only: ["find", "findOne"],
});
