"use strict";

/**
 * supdecom-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::supdecom-agenda.supdecom-agenda", {
  only: ["find"],
});
