"use strict";

/**
 * categorie-de-programme controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { userHelper } = strapi.config.functions.helpers;

module.exports = createCoreController(
  "api::categorie-de-programme.categorie-de-programme",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = ["programmes"];
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const { results } = await strapi
        .service("api::categorie-de-programme.categorie-de-programme")
        .find(sanitizedQueryParams);

      return results;
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      ctx.query.populate = ["programmes"];
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const entity = await strapi
        .service("api::categorie-de-programme.categorie-de-programme")
        .findOne(id, sanitizedQueryParams);

      return entity;
    },
    async count(ctx) {
      const entities = await this.find(ctx);
      return entities.length || 0;
    },
    async autocomplete(ctx) {
      if (userHelper.isAuthenticatedUser(ctx)) {
        ctx.query.fields = ["title", "slug"];
        return await strapi.config.functions.schools.find(
          ctx,
          "api::categorie-de-programme.categorie-de-programme"
        );
      }

      const entities = await strapi.entityService.findMany(
        "api::categorie-de-programme.categorie-de-programme",
        {
          ...ctx.query,
          fields: ["titre", "slug"],
        }
      );

      return entities;
    },
  })
);
