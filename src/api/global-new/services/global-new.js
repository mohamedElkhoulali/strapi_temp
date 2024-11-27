'use strict';

/**
 * global-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-new.global-new');
