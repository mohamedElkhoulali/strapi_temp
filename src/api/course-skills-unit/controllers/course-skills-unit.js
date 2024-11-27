"use strict";

/**
 * course-skills-unit controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::course-skills-unit.course-skills-unit",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = {
        courses: {
          populate:
            strapi.config["population-schemas"].collections
              .courseSkillUnitsCollection,
        },
      };
      const results = await super.find(ctx);
      return results;
    },
    async findOne(ctx) {
      ctx.query.populate = {
        courses: {
          populate:
            strapi.config["population-schemas"].collections
              .courseSkillUnitsCollection,
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
