"use strict";

/**
 * ileri-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ileri-crm-link.ileri-crm-link", {
  only: ["find", "findOne"],
});
