"use strict";

/**
 * figs-schools-info custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-schools-infos/count",
      handler: "figs-schools-info.count",
    },
    {
      method: "GET",
      path: "/figs-schools-infos/school/:name",
      handler: "figs-schools-info.findBySchoolName",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/figs-schools-infos/:slug",
      handler: "figs-schools-info.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
