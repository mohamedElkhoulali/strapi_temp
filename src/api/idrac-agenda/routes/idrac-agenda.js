"use strict";

/**
 * idrac-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::idrac-agenda.idrac-agenda", {
  only: ["find"],
});
