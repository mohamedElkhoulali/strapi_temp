"use strict";

/**
 * vivamundi-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::vivamundi-crm-link.vivamundi-crm-link", {
  only: ["find", "findOne"],
});
