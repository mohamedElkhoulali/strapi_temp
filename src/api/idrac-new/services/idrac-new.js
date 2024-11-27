'use strict';

/**
 * idrac-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::idrac-new.idrac-new');
