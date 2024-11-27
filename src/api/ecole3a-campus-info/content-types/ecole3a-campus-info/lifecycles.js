"use strict";
const { ValidationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeUpdate(event) {
    // check if this campus is already associated with another <current_namespace>-campus-infos
    if (event.params.data.campus?.connect?.length) {
      const isAvailable =
        strapi.config.functions.helpers.lifecycles.isRelationAvailable(
          event,
          "campus"
        );
      if (!isAvailable) {
        throw new ValidationError(
          "The selected campus is already linked to another campus-infos."
        );
      }
    }
  },
  async beforeCreate(event) {
    if (event.params.data.campus?.connect?.length) {
      const isAvailable =
        strapi.config.functions.helpers.lifecycles.isRelationAvailable(
          event,
          "campus"
        );
      if (!isAvailable) {
        throw new ValidationError(
          `The selected campus is already linked to another campus-infos.`
        );
      }
    }
  },
};
