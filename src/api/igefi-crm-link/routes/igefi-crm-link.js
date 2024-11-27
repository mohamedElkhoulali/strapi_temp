"use strict";

/**
 * igefi-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::igefi-crm-link.igefi-crm-link", {
  only: ["find", "findOne"],
});
