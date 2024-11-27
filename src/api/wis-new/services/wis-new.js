'use strict';

/**
 * wis-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wis-new.wis-new');
