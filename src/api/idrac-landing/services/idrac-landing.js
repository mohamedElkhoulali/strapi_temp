'use strict';

/**
 * idrac-landing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::idrac-landing.idrac-landing');
