"use strict";

/**
 * ihedrea-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ihedrea-news",
      handler: "ihedrea-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ihedrea-news/pagination-infos/:newsPerPage",
      handler: "ihedrea-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ihedrea-blog",
      handler: "ihedrea-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ihedrea-news/count",
      handler: "ihedrea-new.count",
    },
    {
      method: "GET",
      path: "/ihedrea-news/:slug",
      handler: "ihedrea-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
