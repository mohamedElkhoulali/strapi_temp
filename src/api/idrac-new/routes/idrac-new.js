"use strict";

/**
 * idrac-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/idrac-news",
      handler: "idrac-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/idrac-news/pagination-infos/:newsPerPage",
      handler: "idrac-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/idrac-blog",
      handler: "idrac-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/idrac-news/count",
      handler: "idrac-new.count",
    },
    {
      method: "GET",
      path: "/idrac-news/:slug",
      handler: "idrac-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
