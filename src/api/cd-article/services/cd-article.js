'use strict';

/**
 * cd-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cd-article.cd-article');
