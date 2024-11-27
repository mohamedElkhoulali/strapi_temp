"use strict";

/**
 * brochure controller
 */

module.exports = {
  async find(ctx, next) {
    const profile = await strapi
      .service("api::profile.profile")
      .getUserProfile(ctx);

    if (!profile) {
      return ctx.notFound("No profile found for the current user.");
    }

    // add the profile of the current user to the filters
    if (ctx.query.filters) {
      ctx.query.filters = {
        ...ctx.query.filters,
        profiles: profile.id,
      };
    } else {
      ctx.query.filters = {
        profiles: profile.id,
      };
    }

    const data = await strapi.config.functions.schools.find(
      ctx,
      "api::brochure.brochure",
      "*"
    );

    if (data) ctx.body = data;
  },
};
