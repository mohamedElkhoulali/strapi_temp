"use strict";

/**
 * epsi-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::epsi-crm-link.epsi-crm-link", {
  only: ["find", "findOne"],
});
