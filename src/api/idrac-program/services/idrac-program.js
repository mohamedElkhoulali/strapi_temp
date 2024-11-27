'use strict';

/**
 * idrac-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::idrac-program.idrac-program');
