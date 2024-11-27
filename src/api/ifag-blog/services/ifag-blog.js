'use strict';

/**
 * ifag-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ifag-blog.ifag-blog');
