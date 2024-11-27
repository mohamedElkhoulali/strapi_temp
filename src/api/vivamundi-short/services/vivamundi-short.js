'use strict';

/**
 * vivamundi-short service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vivamundi-short.vivamundi-short');
