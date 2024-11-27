'use strict';

/**
 * idrac-agenda service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::idrac-agenda.idrac-agenda');
