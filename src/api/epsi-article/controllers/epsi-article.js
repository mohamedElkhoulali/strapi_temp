"use strict";

/**
 * epsi-article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::epsi-article.epsi-article",
  ({ strapi }) => ({
    async count(ctx) {
      const data = await strapi.config.functions.namespace.count(
        ctx,
        "article"
      );

      ctx.body = data;
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
    async find(ctx) {
      ctx.query.populate =
        strapi.config["population-schemas"].collections.article;
      const results = await super.find(ctx);
      return results;
    },
  })
);
