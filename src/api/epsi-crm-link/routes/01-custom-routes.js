"use strict";

/**
 * epsi-crm-link custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-crm-links/:action/campuses",
      handler: "epsi-crm-link.getCampusesByAction",
    },
    {
      method: "GET",
      path: "/epsi-crm-links/:action/:campus/link",
      handler: "epsi-crm-link.getCrmLinkByCampusAndAction",
    },
  ],
};
