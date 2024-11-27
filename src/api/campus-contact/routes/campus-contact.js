"use strict";

/**
 * campus-contact router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::campus-contact.campus-contact", {
  only: ["find", "findOne"],
});
