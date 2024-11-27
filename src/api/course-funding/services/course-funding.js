'use strict';

/**
 * course-funding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-funding.course-funding');
