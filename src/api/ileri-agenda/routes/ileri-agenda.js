"use strict";

/**
 * ileri-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ileri-agenda.ileri-agenda", {
  only: ["find"],
});
