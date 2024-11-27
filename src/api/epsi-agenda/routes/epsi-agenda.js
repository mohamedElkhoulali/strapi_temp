"use strict";

/**
 * epsi-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::epsi-agenda.epsi-agenda", {
  only: ["find"],
});
