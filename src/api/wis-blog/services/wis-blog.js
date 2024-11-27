'use strict';

/**
 * wis-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wis-blog.wis-blog');
