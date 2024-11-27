"use strict";

/**
 * course-sector controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::course-sector.course-sector",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = {
        courses: {
          populate: strapi.config["population-schemas"].collections.course,
        },
      };
      const results = await super.find(ctx);
      return results;
    },
    async findOne(ctx) {
      ctx.query.populate = {
        courses: {
          populate: strapi.config["population-schemas"].collections.course,
        },
      };
      const results = await super.findOne(ctx);
      return results;
    },
    async count(ctx) {
      const { data } = await super.find(ctx);
      return data.length || 0;
    },
  })
);
