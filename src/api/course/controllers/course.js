"use strict";
/**
 * course controller
 */
const { createCoreController } = require("@strapi/strapi").factories;
const { userHelper } = strapi.config.functions.helpers;
module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  async find(ctx) {
    if (ctx.query.fields) {
      let fields = ["publishedAt"];

      if (typeof ctx.query.fields == "string") {
        fields.push(ctx.query.fields);
      } else if (Array.isArray(ctx.query.fields)) {
        fields = fields.concat(ctx.query.fields);
      }

      ctx.query.fields = fields;
    }

    let filters = { ...ctx.query?.filters };

    if (userHelper.isAuthenticatedUser(ctx)) {
      const profile = await strapi
        .service("api::profile.profile")
        .getUserProfile(ctx);

      const schools = await strapi.config.functions.schools.getIds(ctx);

      filters = {
        ...ctx.query?.filters,
        school: schools,
        profile: profile ? { id: profile.id } : null,
      };
    }

    const entities = await strapi.entityService.findMany("api::course.course", {
      ...ctx.query,
      filters: filters,
      populate:
        ctx.query.populate ||
        strapi.config["population-schemas"].collections.course,
    });

    return entities;
  },
  async findOne(ctx) {
    if (userHelper.isAuthenticatedUser(ctx)) {
      const profile = await strapi
        .service("api::profile.profile")
        .getUserProfile(ctx);
      const schools = await strapi.config.functions.schools.getIds(ctx);
      ctx.query.filters = {
        school: schools,
        profile: { id: profile.id },
      };
    }
    const population =
      ctx.query.populate ||
      strapi.config["population-schemas"].collections.course;

    const entity =
      await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        "api::course.course",
        population
      );
    return entity;
  },
  async findByCat(ctx) {
    const { slug } = ctx.params;
    ctx.query.filters = {
      programCat: { slug: slug },
      ...ctx.query?.filters,
    };
    const entities = await strapi.config.functions.schools.find(
      ctx,
      "api::course.course",
      strapi.config["population-schemas"].collections.course
    );
    return entities;
  },
  async filters(ctx) {
    if (userHelper.isAuthenticatedUser(ctx)) {
      const profile = await strapi
        .service("api::profile.profile")
        .getUserProfile(ctx);
      const schools = await strapi.config.functions.schools.getIds(ctx);
      ctx.query.filters = {
        school: schools,
        profile: { id: profile.id },
      };
    }
    const entities = await strapi.config.functions.schools.find(
      ctx,
      "api::course.course",
      strapi.config["population-schemas"].collections.course
    );
    const filters = strapi.service("api::course.course").parseFilters(entities);
    return filters;
  },
  async search(ctx) {
    const profile = await strapi
      .service("api::profile.profile")
      .getUserProfile(ctx);
    const schools = await strapi.config.functions.schools.getIds(ctx);
    const { query } = ctx;
    if (query._q && query._q !== "")
      return await strapi
        .service("api::course.course")
        .searchCourse(query, schools, profile);
    return await strapi.config.functions.schools.find(
      ctx,
      "api::course.course",
      {
        ...strapi.config["population-schemas"].collections.course,
        content: false,
        details: false,
        panel: false,
        fullwidthContent: false,
      }
    );
  },
  async autocomplete(ctx) {
    ctx.query.fields = ["title", "name", "slug"];
    const entities = await strapi.config.functions.schools.find(
      ctx,
      "api::course.course"
    );
    return entities;
  },
  // TODO: check if this endpoint is relevant (it seems not to be used by any front)
  async count(ctx) {
    return await strapi.config.functions.schools.count(
      ctx,
      "api::course.course"
    );
  },
}));
