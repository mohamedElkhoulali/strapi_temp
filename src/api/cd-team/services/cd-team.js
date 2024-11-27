'use strict';

/**
 * cd-team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cd-team.cd-team');
