'use strict';

/**
 * figs-live service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::figs-live.figs-live');
