"use strict";

/**
 * campus controller
 */

const { userHelper } = strapi.config.functions.helpers;

/**
 * Filters a campus entity to only keep the courses related to the profile and the schools of the current user
 * @param   {Object} ctx
 * @param   {Object} entity
 * @returns {Object}
 */
async function filterCoursesForUser(ctx, entity) {
  const { id: userProfileId } =
    await strapi.config.functions.profile.getUserProfileFromContext(ctx);
  const schoolsIds = await strapi.config.functions.schools.getIds(ctx);

  if (entity && entity.courses) {
    entity.courses = entity.courses.filter(
      (course) =>
        schoolsIds.indexOf(course.school?.id) > -1 &&
        userProfileId === course.profile?.id
    );
  }

  return entity;
}

module.exports = {
  async find(ctx) {
    let populate = {};
    if (ctx.query.populate) {
      populate = ctx.query.populate;
    } else {
      populate = {
        ...strapi.config["population-schemas"].collections.campus,
        content: false,
        schools: false,
        courses: false,
      };
    }

    if (userHelper.isAuthenticatedUser(ctx)) {
      return await strapi.config.functions.schools.find(
        ctx,
        "api::campus.campus",
        populate
      );
    }

    ctx.query.populate = populate;
    let results = await strapi.entityService.findMany(
      "api::campus.campus",
      ctx.query
    );

    return results;
  },
  async findOne(ctx) {
    let entity = await strapi.config.functions.controllerOverride.findOneBySlug(
      ctx,
      "api::campus.campus",
      ctx.query.populate ||
        strapi.config["population-schemas"].collections.campus
    );

    // remove courses that are not included in website schools and not for the current profile
    if (userHelper.isAuthenticatedUser(ctx)) {
      entity = await filterCoursesForUser(ctx, entity);
    }

    return entity;
  },
  async autocomplete(ctx) {
    if (userHelper.isAuthenticatedUser(ctx)) {
      ctx.query.fields = ["title", "slug", "publishedAt"];
      return await strapi.config.functions.schools.find(
        ctx,
        "api::campus.campus"
      );
    }

    const entities = await strapi.entityService.findMany("api::campus.campus", {
      fields: ["title", "slug", "publishedAt"],
    });

    return entities;
  },
};
