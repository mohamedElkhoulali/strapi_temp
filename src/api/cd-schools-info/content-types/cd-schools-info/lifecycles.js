"use strict";
const { ValidationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeUpdate(event) {
    // check if this school is already associated with another cd-school-info
    if (event.params.data.school?.connect?.length) {
      const isAvailable =
        await strapi.config.functions.helpers.lifecycles.isRelationAvailable(
          event,
          "school"
        );
      if (!isAvailable) {
        throw new ValidationError(
          "The selected school is already linked to another cd-school-info."
        );
      }
    }
  },
  async beforeCreate(event) {
    if (event.params.data.school?.connect?.length) {
      const isAvailable =
        await strapi.config.functions.helpers.lifecycles.isRelationAvailable(
          event,
          "school"
        );
      if (!isAvailable) {
        throw new ValidationError(
          `The selected school is already linked to another cd-school-info.`
        );
      }
    }
  },
};
