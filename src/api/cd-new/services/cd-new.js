'use strict';

/**
 * cd-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cd-new.cd-new');
