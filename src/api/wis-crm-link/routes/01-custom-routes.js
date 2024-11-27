"use strict";

/**
 * wis-crm-link custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-crm-links/:action/campuses",
      handler: "wis-crm-link.getCampusesByAction",
    },
    {
      method: "GET",
      path: "/wis-crm-links/:action/:campus/link",
      handler: "wis-crm-link.getCrmLinkByCampusAndAction",
    },
  ],
};