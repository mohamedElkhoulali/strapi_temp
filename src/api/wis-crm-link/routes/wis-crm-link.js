"use strict";

/**
 * wis-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::wis-crm-link.wis-crm-link", {
  only: ["find", "findOne"],
});
