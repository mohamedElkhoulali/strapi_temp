"use strict";

/**
 * crm-link router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/crm-links/:action/:course/campuses",
      handler: "crm-link.findCampusesFromActionCourse",
    },
    {
      method: "GET",
      path: "/crm-links/:action/:course/:campus",
      handler: "crm-link.findCRMLinksFromActionCourseCampus",
    },
    {
      method: "GET",
      path: "/crm-links/actions",
      handler: "crm-link.findActions",
    },
  ],
};
