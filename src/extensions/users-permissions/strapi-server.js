/*
Official documentation: https://docs.strapi.io/dev-docs/api/plugins/server-api
Usage and population example: https://forum.strapi.io/t/populate-users-permissions-to-get-user-avatar/13701/9 
*/

const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;
const { NotFoundError } = require("@strapi/utils").errors;

module.exports = (plugin) => {
  plugin.controllers.user.me = async (ctx) => {
    const user = await strapi.entityService.findOne('plugin::users-permissions.user', ctx.state.user.id, {
      populate: strapi.config["population-schemas"].collections.users
    });
    if(user){
      const contentType = strapi.contentType('plugin::users-permissions.user')
      return await contentAPI.output(
        user,
        contentType,
        ctx.state.auth,
      );
    } else {
      throw new NotFoundError('User information not found.');
    }
  };

  return plugin;
};