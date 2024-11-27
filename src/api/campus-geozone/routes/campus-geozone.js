"use strict";

/**
 * campus-geozone router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::campus-geozone.campus-geozone", {
  only: ["find", "findOne"],
});
