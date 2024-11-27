"use strict";

module.exports = {
  async getUserProfileFromContext(ctx) {
    const fullUser = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      ctx.state.user.id,
      {
        populate: ["profile"],
      }
    );

    if (fullUser.profile) {
      return fullUser.profile;
    }
    return undefined;
  },
};
