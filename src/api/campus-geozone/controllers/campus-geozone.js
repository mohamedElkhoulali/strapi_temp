"use strict";

/**
 * campus-geozone controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::campus-geozone.campus-geozone",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = ["campuses"];
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const { results } = await strapi
        .service("api::campus-geozone.campus-geozone")
        .find(sanitizedQueryParams);

      return results;
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      ctx.query.populate = ["campuses"];
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const entity = await strapi
        .service("api::campus-geozone.campus-geozone")
        .findOne(id, sanitizedQueryParams);

      return entity;
    },
    async count(ctx) {
      const { results } = await strapi
        .service("api::campus-geozone.campus-geozone")
        .find();

      return results.length || 0;
    },
  })
);
