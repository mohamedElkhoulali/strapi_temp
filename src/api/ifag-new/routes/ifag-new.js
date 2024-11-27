"use strict";

/**
 * ifag-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ifag-news",
      handler: "ifag-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ifag-news/pagination-infos/:newsPerPage",
      handler: "ifag-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ifag-blog",
      handler: "ifag-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ifag-news/count",
      handler: "ifag-new.count",
    },
    {
      method: "GET",
      path: "/ifag-news/:slug",
      handler: "ifag-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
