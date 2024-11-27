'use strict';

/**
 * cd-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cd-blog.cd-blog');
