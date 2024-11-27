"use strict";

const { ApplicationError } = require("@strapi/utils").errors;

/**
 * Check if a contact with those campus and school already exists
 * @param {Array} courses
 * @returns {Array}
 */
async function checkIfContactExists(campusId, schoolId) {
  if (!campusId || !schoolId) return false;

  // the 'where' attribute does not seem to appreciate relations attributes
  const contacts = await strapi.entityService.findMany(
    "api::campus-contact.campus-contact",
    {
      populate: { campus: true, school: true },
    }
  );

  return contacts.some((c) => {
    return c.campus?.id == campusId && c.school?.id == schoolId;
  });
}

/**
 * Get updated ids for campus and school of campus-contact
 * @param {Object} event the lifecycle event object
 * @param {Object} oldData initial ids for campus and school (ex: { campusId: 1, schoolId: null })
 * @returns {Object} (ex: { campusId: null, schoolId: 1 })
 */
function getNewRelationsIds(event, oldData) {
  const campusDisconnect = event.params.data.campus.disconnect[0]; // use [0] because it's a one-to-one relation
  const schoolDisconnect = event.params.data.school.disconnect[0];
  const campusConnect = event.params.data.campus.connect[0];
  const schoolConnect = event.params.data.school.connect[0];

  if (campusDisconnect) {
    oldData.campusId = null;
  }
  if (schoolDisconnect) {
    oldData.schoolId = null;
  }
  if (campusConnect) {
    oldData.campusId = campusConnect.id;
  }
  if (schoolConnect) {
    oldData.schoolId = schoolConnect.id;
  }

  return oldData;
}

module.exports = {
  // avoid duplicates (we do not want 2 contacts for the same campus and school)
  async beforeCreate(event) {
    const newCampus = event.params.data?.campus?.connect[0]; // will have only one element because it's a one-to-one relation
    const newSchool = event.params.data?.school?.connect[0];

    if (!newCampus || !newSchool) return;

    const contactExists = await checkIfContactExists(
      newCampus.id,
      newSchool.id
    );

    if (contactExists) {
      throw new ApplicationError(
        "Il existe déjà un contact pour cette école et ce campus."
      );
    }
  },
  async beforeUpdate(event) {
    // basic checks to not make useless functions calls
    if (!event.params.where.id) return;
    const campusConnection = event.params.data?.campus?.connect[0]; // use [0] because it's a one-to-one relation
    const schoolConnection = event.params.data?.school?.connect[0];
    if (!campusConnection && !schoolConnection) return;

    // getting old data to compute what relations should look like after update
    const oldContact = await strapi.entityService.findMany(
      "api::campus-contact.campus-contact",
      {
        filters: { id: event.params.where.id },
        populate: { campus: true, school: true },
      }
    );
    const oldIds = {
      campusId: oldContact[0].campus?.id, // since we filter by id we should have only one result
      schoolId: oldContact[0].school?.id,
    };
    const newIds = getNewRelationsIds(event, oldIds);

    // throw an error and cancel update if the new contact already exists for this school and campus
    const contactExists = await checkIfContactExists(
      newIds.campusId,
      newIds.schoolId
    );
    if (contactExists) {
      throw new ApplicationError(
        "Il existe déjà un contact pour cette école et ce campus."
      );
    }
  },
};
