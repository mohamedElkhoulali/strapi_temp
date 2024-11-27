"use strict";

/**
 * supdecom-crm-link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::supdecom-crm-link.supdecom-crm-link", {
  only: ["find", "findOne"],
});
