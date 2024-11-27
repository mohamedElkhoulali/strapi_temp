"use strict";

/**
 * ihedrea-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ihedrea-crm-link.ihedrea-crm-link", {
  only: ["find", "findOne"],
});
