"use strict";

/**
 * sitemap service
 */

module.exports = {
  async getNamspacedPaths(
    ctx,
    namespace,
    mappingFunction,
    paths = [],
    populate = {},
    filterFunction = null
  ) {
    let entities = await strapi.config.functions.namespace.find(
      ctx,
      namespace,
      populate
    );

    if (filterFunction) {
      entities = entities.filter(filterFunction);
    }

    return paths.concat(entities.map(mappingFunction));
  },
  async getSchoolsPaths(
    ctx,
    serviceUid,
    mappingFunction,
    paths = [],
    populate = {}
  ) {
    const entities = await strapi.config.functions.schools.find(
      ctx,
      serviceUid,
      populate
    );

    return paths.concat(entities.map(mappingFunction));
  },
  async getCommonsArticlesPaths(ctx, mappingFunction, paths) {
    ctx.populate = {
      websites: true,
    };

    const entities = await strapi
      .service("api::commons-article.commons-article")
      .find(ctx);

    return paths.concat(entities.map(mappingFunction));
  },
};
