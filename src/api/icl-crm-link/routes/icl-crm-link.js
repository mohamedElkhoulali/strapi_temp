"use strict";

/**
 * icl-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::icl-crm-link.icl-crm-link", {
  only: ["find", "findOne"],
});
