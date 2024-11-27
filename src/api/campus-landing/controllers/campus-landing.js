"use strict";

/**
 * campus-landing controller
 */

const { userHelper } = strapi.config.functions.helpers;

module.exports = {
  async findSingle(ctx, next) {
    const schoolsIds = await strapi.config.functions.schools.getIds(ctx);

    if (userHelper.isAuthenticatedUser(ctx) || userHelper.isGlobalUser(ctx)) {
      const entities = await strapi.entityService.findMany(
        "api::campus-landing.campus-landing",
        {
          ...ctx.query,
          filters: {
            school: { id: schoolsIds },
          },
          populate:
            ctx.query.populate ||
            strapi.config["population-schemas"].collections.campusLanding,
        }
      );

      if (entities.length) return entities[0];
    }
  },
};
