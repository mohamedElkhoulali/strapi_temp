"use strict";

/**
 * cd-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::cd-agenda.cd-agenda", {
  only: ["find"],
});
