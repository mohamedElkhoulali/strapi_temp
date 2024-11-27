/* 
Useful documentation: 
For syntax and usage: https://docs.strapi.io/dev-docs/backend-customization/policies#global-policies
For better error handling: https://docs.strapi.io/dev-docs/error-handling#policies
More information about request object: https://koajs.com/#request 
*/
'use strict';
const { PolicyError } = require("@strapi/utils").errors;

/**
 * @policy is-allowed-origin
 * Checks origin of request. Mostly used for /version.
 */

module.exports = async (ctx, next) => {
  const origins = strapi.config.get('security.allowFromOrigins', ['*']);
  if (origins.includes('*') || origins.includes(ctx.request.origin)) {
    return true;
  }
  throw new PolicyError('You\'re not allowed to access this data!');
};
