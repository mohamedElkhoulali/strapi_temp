"use strict";

/**
 * iet-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::iet-crm-link.iet-crm-link", {
  only: ["find", "findOne"],
});
