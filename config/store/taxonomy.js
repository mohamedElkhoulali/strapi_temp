/*
  This is a simplified store for handling global values.
  It does not uses a framework.
*/

"use strict";

const state = {
  // Each item represents the last update date of the taxonomies of a namespace.
  lastUpdateDates: {},
};

const mutations = {
  /**
   * Sets a last update date for a namespace.
   * @param {string} namespace
   * @param {string} date - a date formated with toISOString()
   */
  SET_LAST_UPDATE_DATE_FOR_NAMESPACE(namespace, date) {
    if (namespace && typeof namespace == "string") {
      state.lastUpdateDates[namespace] = date;
    }
  },
};

const getters = {
  /**
   *
   * @param {string} namespace
   * @returns {string|null} returns the last update date (ISO format) if found, or null.
   */
  getLastUpdateDateForNamespace(namespace) {
    if (namespace && typeof namespace == "string") {
      return state.lastUpdateDates[namespace];
    }
    return null;
  },
};

module.exports = {
  mutations,
  getters,
};
