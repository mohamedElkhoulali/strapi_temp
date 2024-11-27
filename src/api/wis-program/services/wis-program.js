'use strict';

/**
 * wis-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wis-program.wis-program');
