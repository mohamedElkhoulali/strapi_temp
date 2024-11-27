'use strict';

/**
 * wis-search service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wis-search.wis-search');
