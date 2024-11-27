"use strict";
const _ = require("lodash");

/**
 * 'course_skills_unit' is a relation to a 'skills-unit-program'. We're updating this relation
    to be consistent with what we can find in the 'details' dynamic zone. (This relation can be found
    in both 'teaching-unit' and 'skills-unit' components)
 * @param {Object} data 
 * @returns {Array}
 */
function getSkillsUnits(data) {
  const result = [];
  if (data.details) {
    data.details.forEach((item) => {
      if (item.__component === "course.skills-unit") {
        item.program.forEach((elt) => {
          if (result.indexOf(elt.skills_unit) === -1) {
            result.push(elt.skills_unit);
          }
        });
      } else if (item.__component === "course.teaching-unit") {
        item.goals.forEach((elt) => {
          if (result.indexOf(elt.skills_unit) === -1) {
            result.push(elt.skills_unit);
          }
        });
      }
    });
  }
  return result;
}

/**
 * Generate pLabel from course name, school name and profile name
 * @param {Object} event strapi event object for lifecycle hooks
 * @param {Object} course fetched course data
 * @returns
 */
async function getPrivateLabel(event, course) {
  const findMissingSchool = async () => {
    return await strapi.entityService.findOne(
      "api::school.school",
      course.school?.id
    );
  };
  const findMissingProfile = async () => {
    return await strapi.entityService.findOne(
      "api::profile.profile",
      course.profile?.id
    );
  };

  const school =
    await strapi.config.functions.helpers.lifecycles.getRelationsUpdateResult(
      course.school ? [course.school] : [],
      event.params.data.school.connect,
      event.params.data.school.disconnect,
      findMissingSchool
    );
  const profile =
    await strapi.config.functions.helpers.lifecycles.getRelationsUpdateResult(
      course.profile ? [course.profile] : [],
      event.params.data.profile.connect,
      event.params.data.profile.disconnect,
      findMissingProfile
    );
  if (school.length && profile.length) {
    return `[${school[0].name}][${profile[0].name}] ${event.params.data.name}`;
  } else {
    return event.params.data.name;
  }
}

/**
 * Small sorting function
 * @param {Array} campuses
 * @returns {Array}
 */
function sortCampuses(campuses) {
  if (campuses) {
    return _.orderBy(campuses, (item) => item.label?.toLowerCase(), ["asc"]);
  }
}

/**
 * Generates a population param object, for course's "details" dynamiczone.
 * @param {true | '*'} populateAllSymbol
 * @returns {Object}
 */
function getCourseDetailsPopulationParams(populateAllSymbol = true) {
  return {
    details: {
      populate: {
        // for course.skills-unit
        // goals: populateAllSymbol, // add this if you remove the 'teaching-unit.goals' population
        program: {
          populate: {
            items: populateAllSymbol,
            skills_unit: {
              populate: {
                courses: populateAllSymbol, // still can populate more fields in there
              },
            },
          },
        },
        // for course.teaching-unit
        goals: {
          populate: {
            skills_unit: {
              populate: {
                courses: populateAllSymbol, // still can populate more fields in there
              },
            },
            items: populateAllSymbol,
          },
        },
        // program: { // add this if you remove the 'skills-unit.program' population
        //   populate: {
        //     items: populateAllSymbol,
        //   },
        // },
      },
    },
    school: populateAllSymbol,
    profile: populateAllSymbol,
  };
}

module.exports = {
  async beforeCreate(event) {
    // get some data about skills-unit in 'details' dynamiczone to update if
    if (!event.params.data.details) return;
    const detailsId = event.params.data.details[0].id;
    const detailsType = event.params.data.details[0].__component;
    if (
      detailsType !== "course.skills-unit" &&
      detailsType != "course.teaching-unit"
    )
      return;
    const componentData = await strapi.entityService.findOne(
      detailsType,
      detailsId,
      {
        populate: getCourseDetailsPopulationParams("*").details.populate,
      }
    );
    componentData.__component = detailsType;
    // update of 'course_skills_unit' which is a relation to 'skills-unit-program'
    event.params.data.course_skills_unit = getSkillsUnits({
      details: [componentData],
    });

    // fetch data to generate pLabel. We can't fetch the course so be can't use the same function as in beforeUpdate.
    let school = null;
    if (event.params.data.school?.connect?.length) {
      school = await strapi.entityService.findOne(
        "api::school.school",
        event.params.data.school.connect[0].id
      );
    }
    let profile = null;
    if (event.params.data.profile?.connect?.length) {
      profile = await strapi.entityService.findOne(
        "api::profile.profile",
        event.params.data.profile.connect[0].id
      );
    }
    // generate pLabel
    if (school && profile) {
      event.params.data.pLabel = `[${school.name}][${profile.name}] ${event.params.data.name}`;
    } else {
      event.params.data.pLabel = event.params.data.name;
    }
  },
  async beforeUpdate(event) {
    const course = await strapi.entityService.findOne(
      "api::course.course",
      event.params.where.id,
      {
        populate: getCourseDetailsPopulationParams(),
      }
    );
    if (course.publishedAt || event.params.data.publishedAt) return;

    //update of 'course_skills_unit' which is a relation to 'skills-unit-program'
    event.params.data.course_skills_unit = getSkillsUnits(course);

    //compute pLabel from school, profile et program name
    if (course.profile?.id && course.school?.id) {
      event.params.data.pLabel = await getPrivateLabel(event, course);
    }
  },
  afterFindOne(result) {
    if (!result.result || !result.result.campuses) return;
    result.result.campuses = sortCampuses(result.result.campuses);
  },
  afterFindMany(result) {
    if (!result.result) return;
    result.result.forEach((item) => {
      if (item?.campuses) {
        item.campuses = sortCampuses(item.campuses);
      }
    });
  },
};
