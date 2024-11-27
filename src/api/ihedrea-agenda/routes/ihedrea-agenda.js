"use strict";

/**
 * ihedrea-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ihedrea-agenda.ihedrea-agenda", {
  only: ["find"],
});
