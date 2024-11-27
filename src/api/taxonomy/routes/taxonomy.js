"use strict";

/**
 * taxonomy router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/taxonomy",
      handler: "taxonomy.find",
    },
    {
      method: "POST",
      path: "/taxonomy/update",
      handler: "taxonomy.update",
      config: {
        policies: ["global::has-security-token"],
      },
    },
    {
      method: "GET",
      path: "/taxonomy/last-update",
      handler: "taxonomy.findLastUpdateDate",
    },
  ],
};
