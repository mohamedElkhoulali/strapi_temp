/* 
Useful documentation: 
For syntax and usage: https://docs.strapi.io/dev-docs/backend-customization/policies#global-policies
For better error handling: https://docs.strapi.io/dev-docs/error-handling#policies
*/

"use strict";
const { PolicyError } = require("@strapi/utils").errors;
const userHelper = require("../../config/functions/helpers/user");

/**
 * @policy has-security-token
 * Allows query to access controller if user is connected with a token
 */
module.exports = async (ctx) => {
  const sentToken = ctx.request.header["x-strapi-security-token"];
  if (
    (userHelper.isAuthenticatedUser(ctx) || userHelper.isGlobalUser(ctx)) &&
    ctx.state.user.securityToken === sentToken
  ) {
    return true;
  } else {
    throw new PolicyError("You're not allowed to access this data!");
  }
};
