"use strict";

/**
 * ieft-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ieft-crm-link.ieft-crm-link", {
  only: ["find", "findOne"],
});
