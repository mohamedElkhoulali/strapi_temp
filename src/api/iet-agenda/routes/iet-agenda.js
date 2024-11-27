"use strict";

/**
 * iet-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::iet-agenda.iet-agenda", {
  only: ["find"],
});
