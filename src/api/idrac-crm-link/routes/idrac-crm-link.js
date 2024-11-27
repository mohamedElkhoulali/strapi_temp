"use strict";

/**
 * idrac-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::idrac-crm-link.idrac-crm-link", {
  only: ["find", "findOne"],
});
