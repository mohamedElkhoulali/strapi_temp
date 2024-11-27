"use strict";

/**
 * esail-agenda router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::esail-agenda.esail-agenda", {
  only: ["find"],
});
