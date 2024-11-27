"use strict";
const { ValidationError } = require("@strapi/utils").errors;

async function isSchoolAvailable(school, modelUid) {
  if (!school) return;

  const schoolToInsertId = school?.connect[0].id;

  const data = await strapi.db.query(modelUid).findOne({
    where: {
      $and: [
        {
          school: {
            id: schoolToInsertId,
          },
        },
      ],
    },
  });
  if (data) {
    return false;
  }
  return true;
}

module.exports = {
  async beforeUpdate(event) {
    // check if this school is already associated with another campus-landing
    if (event.params.data.school?.connect?.length) {
      const isAvailable = await isSchoolAvailable(
        event.params.data.school,
        event.model.uid
      );

      if (!isAvailable) {
        throw new ValidationError(
          "The selected school is already linked to another campus-landing."
        );
      }
    }
  },
  async beforeCreate(event) {
    if (event.params.data.school?.connect?.length) {
      const isAvailable = await isSchoolAvailable(
        event.params.data.school,
        event.model.uid
      );

      if (!isAvailable) {
        throw new ValidationError(
          `The selected school is already linked to another campus-landing.`
        );
      }
    }
  },
};
