"use strict";

/**
 * cd-schools-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cd-schools-infos/count",
      handler: "cd-schools-info.count",
    },
    {
      method: "GET",
      path: "/cd-schools-infos/school/:name",
      handler: "cd-schools-info.findBySchoolName",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/cd-schools-infos/:slug",
      handler: "cd-schools-info.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
