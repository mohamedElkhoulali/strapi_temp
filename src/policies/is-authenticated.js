/**
 * Replace users-permissions plugin 'isAuthenticated' policy
 * The example here seems to be a mistake, probably an artifact from v3
 * https://docs.strapi.io/dev-docs/backend-customization/policies#plugin-policies 
 * See this issue for more information: https://github.com/strapi/strapi/issues/12521 
 * Useful documentation: https://docs.strapi.io/dev-docs/backend-customization/policies#global-policies
 */

'use strict';
const { PolicyError } = require("@strapi/utils").errors;

module.exports = (ctx) => {
  if (!ctx.state.user) {
    throw new PolicyError('You\'re not allowed to access this data!');
  }

  return true;
};
