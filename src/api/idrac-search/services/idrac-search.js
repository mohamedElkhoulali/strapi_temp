'use strict';

/**
 * idrac-search service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::idrac-search.idrac-search');
