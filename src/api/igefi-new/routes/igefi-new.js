"use strict";

/**
 * igefi-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/igefi-news",
      handler: "igefi-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/igefi-news/pagination-infos/:newsPerPage",
      handler: "igefi-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/igefi-blog",
      handler: "igefi-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/igefi-news/count",
      handler: "igefi-new.count",
    },
    {
      method: "GET",
      path: "/igefi-news/:slug",
      handler: "igefi-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "POST",
      path: "/igefi-news",
      handler: "igefi-new.create",
    },
  ],
};
