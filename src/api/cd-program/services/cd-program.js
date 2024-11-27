"use strict";

/**
 * cd-program service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::cd-program.cd-program");
