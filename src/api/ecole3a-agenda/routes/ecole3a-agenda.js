"use strict";

/**
 * ecole3a-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ecole3a-agenda.ecole3a-agenda", {
  only: ["find"],
});
