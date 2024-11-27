"use strict";

/**
 * crm-link controller
 */

/**
 * Filters the courses that match the current user's profile a split them in differents arrays for each actions
 * @param   {Integer} profileId
 * @param   {Array}   entities
 * @returns {Array}
 */
function getCoursesForUserProfile(profileId, entities) {
  const data = {
    contact: [],
    brochure: [],
    registration: [],
  };

  entities.forEach(({ action, courses }) => {
    courses.forEach((course) => {
      if (
        course.profile?.id === profileId &&
        !data[action].find((el) => el.slug === course.slug)
      )
        data[action].push({
          slug: course.slug,
          name: course.name,
          degreeLevel: course.degreeLevel,
        });
    });
  });

  return data;
}

/**
 * compare two courses to sort them by courses name, then by degreeLevel desc
 * @param   {Object}  a
 * @param   {Object}  b
 * @returns {Integer}
 */
function compare(a, b) {
  return a.name > b.name
    ? 1
    : a.name < b.name
    ? -1
    : b.degreeLevel > a.degreeLevel
    ? 1
    : b.degreeLevel < a.degreeLevel
    ? -1
    : 0;
}

module.exports = {
  async findActions(ctx, next) {
    const profile = await strapi
      .service("api::profile.profile")
      .getUserProfile(ctx);
    const { query } = ctx;

    ctx.query = strapi.config.functions.utils.addFilterToQuery(query, {
      campusesEmpty: false,
      coursesEmpty: false,
    });

    // find the crm links that have a course and a campus
    const entities = await strapi.config.functions.namespace.find(
      ctx,
      "crm-link",
      strapi.config["population-schemas"].collections.crmLinks
    );

    // add to data the courses matching the user's profile (without duplicates)
    const data = getCoursesForUserProfile(profile.id, entities);

    // sort the courses by courses name, then by degreeLevel desc
    Object.keys(data).forEach((key) => {
      data[key].sort(compare);
    });

    return data;
  },
  async findCampusesFromActionCourse(ctx, next) {
    const { query } = ctx;

    ctx.query = strapi.config.functions.utils.addFilterToQuery(query, {
      action: ctx.params.action,
      courses: {
        slug: ctx.params.course,
      },
    });

    // get the crm-links matching the action, the course and the namespace of the current user
    const entities = await strapi.config.functions.namespace.find(
      ctx,
      "crm-link",
      ["campuses"]
    );

    const data = [];

    // get the names and slug for each campuses without duplicates
    entities.forEach(({ campuses }) => {
      campuses.forEach(({ slug, label }) => {
        if (!data.find((el) => el.slug === slug)) {
          data.push({ slug, name: label });
        }
      });
    });

    // sort the campuses by names
    data.sort(compare);

    return data;
  },
  async findCRMLinksFromActionCourseCampus(ctx, next) {
    const { query } = ctx;

    ctx.query = strapi.config.functions.utils.addFilterToQuery(query, {
      action: ctx.params.action,
      courses: {
        slug: ctx.params.course,
      },
      campuses: {
        slug: ctx.params.campus,
      },
    });

    const entities = await strapi.config.functions.namespace.find(
      ctx,
      "crm-link",
      ["variants"]
    );

    return entities;
  },
};
