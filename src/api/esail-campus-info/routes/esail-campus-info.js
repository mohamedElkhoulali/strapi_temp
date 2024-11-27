"use strict";

/**
 * esail-campus-info router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::esail-campus-info.esail-campus-info", {
  only: ["find", "findOne"],
});
