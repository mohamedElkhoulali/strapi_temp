"use strict";

/**
 * iet-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/iet-news",
      handler: "iet-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/iet-news/pagination-infos/:newsPerPage",
      handler: "iet-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/iet-blog",
      handler: "iet-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/iet-news/count",
      handler: "iet-new.count",
    },
    {
      method: "GET",
      path: "/iet-news/:slug",
      handler: "iet-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
