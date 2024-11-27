"use strict";

/**
 * commons-article service
 */

const { userHelper } = strapi.config.functions.helpers;
const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::commons-article.commons-article",
  ({ strapi }) => ({
    async findOneBySlug(ctx) {
      if (userHelper.isAuthenticatedUser || userHelper.isGlobalUser) {
        const entity =
          await strapi.config.functions.controllerOverride.findOneBySlug(
            ctx,
            "api::commons-article.commons-article",
            strapi.config["population-schemas"].collections.article
          );

        if (entity?.websites.length > 0) {
          // filter by websites
          const linkedUsersIds = entity.websites.map((el) => el.id);

          if (linkedUsersIds.includes(ctx.state.user.id)) {
            return entity;
          }
        } else {
          return entity;
        }
      }
    },
    async find(ctx) {
      if (userHelper.isAuthenticatedUser || userHelper.isGlobalUser) {
        const { results: entities } = await super.find(ctx);

        const entitiesFilteredByUser = [];

        for (const entity of entities) {
          if (entity?.websites?.length > 0) {
            const linkedUsersIds = entity.websites.map((el) => el.id);

            if (linkedUsersIds.includes(ctx.state.user.id)) {
              entitiesFilteredByUser.push(entity);
            }
          } else {
            entitiesFilteredByUser.push(entity);
          }
        }

        return entitiesFilteredByUser;
      }
    },
  })
);
