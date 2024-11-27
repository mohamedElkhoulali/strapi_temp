"use strict";

/**
 * commons-article controller
 */

const { userHelper } = strapi.config.functions.helpers;
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::commons-article.commons-article",
  ({ strapi }) => ({
    async count(ctx) {
      const data = await strapi.config.functions.namespace.count(
        ctx,
        "article"
      );

      ctx.body = data;
    },
    async findOne(ctx) {
      if (userHelper.isContentManagerUser(ctx)) {
        return await strapi.config.functions.controllerOverride.findOneBySlug(
          ctx,
          "api::commons-article.commons-article",
          strapi.config["population-schemas"].collections.article
        );
      }

      return await strapi.config.functions.namespace.findOne(
        ctx,
        "article",
        ctx.query.populate ||
          strapi.config["population-schemas"].collections.article
      );
    },
    async find(ctx) {
      ctx.query.populate =
        ctx.query.populate ||
        strapi.config["population-schemas"].collections.article;
      const results = await super.find(ctx);
      return results;
    },
  })
);
