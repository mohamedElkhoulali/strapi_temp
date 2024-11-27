'use strict';

/**
 * wis-landing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wis-landing.wis-landing');
