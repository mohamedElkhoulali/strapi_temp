"use strict";

/**
 * esail-article controller
 */

const { userHelper } = strapi.config.functions.helpers;
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::esail-article.esail-article",
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
          "api::esail-article.esail-article",
          strapi.config["population-schemas"].collections.article
        );
      }

      const entity = await strapi.config.functions.namespace.findOne(
        ctx,
        "article",
        ctx.query.populate ||
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
        ctx.query.populate ||
        strapi.config["population-schemas"].collections.article;
      const results = await super.find(ctx);
      return results;
    },
  })
);
