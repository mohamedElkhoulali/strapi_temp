"use strict";

/**
 * ifag-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ifag-crm-link.ifag-crm-link", {
  only: ["find", "findOne"],
});
