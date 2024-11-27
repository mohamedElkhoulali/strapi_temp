"use strict";

/**
 * article controller
 */

module.exports = {
  async find(ctx, next) {
    const data = await strapi.config.functions.namespace.find(ctx, "article", {
      ...strapi.config["population-schemas"].collections.article,
      content: false,
      seo: false,
    });

    if (data) ctx.body = data;
  },
  async findOne(ctx) {
    const entity = await strapi.config.functions.namespace.findOne(
      ctx,
      "article",
      strapi.config["population-schemas"].collections.article
    );

    if (!entity) {
      return await strapi
        .service("api::commons-article.commons-article")
        .findOneBySlug(ctx);
    } else {
      return entity;
    }
  },
  async count(ctx) {
    const data = await strapi.config.functions.namespace.count(ctx, "article");

    ctx.body = data;
  },
};
