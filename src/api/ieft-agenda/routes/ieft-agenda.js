"use strict";

/**
 * ieft-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ieft-agenda.ieft-agenda", {
  only: ["find"],
});
