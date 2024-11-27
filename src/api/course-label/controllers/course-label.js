"use strict";

/**
 * course-label controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::course-label.course-label",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = {
        logo: true,
        courses: {
          populate: strapi.config["population-schemas"].collections.course,
        },
      };
      const results = await super.find(ctx);
      return results;
    },
    async findOne(ctx) {
      ctx.query.populate = {
        logo: true,
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
