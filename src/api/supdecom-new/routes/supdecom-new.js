"use strict";

/**
 * supdecom-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/supdecom-news",
      handler: "supdecom-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/supdecom-news/pagination-infos/:newsPerPage",
      handler: "supdecom-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/supdecom-blog",
      handler: "supdecom-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/supdecom-news/count",
      handler: "supdecom-new.count",
    },
    {
      method: "GET",
      path: "/supdecom-news/:slug",
      handler: "supdecom-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
