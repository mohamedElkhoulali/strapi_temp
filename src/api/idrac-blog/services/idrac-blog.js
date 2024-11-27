'use strict';

/**
 * idrac-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::idrac-blog.idrac-blog');
