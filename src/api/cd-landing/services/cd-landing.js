'use strict';

/**
 * cd-landing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cd-landing.cd-landing');
