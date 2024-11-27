"use strict";

/**
 * ieft-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ieft-news",
      handler: "ieft-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ieft-news/pagination-infos/:newsPerPage",
      handler: "ieft-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ieft-blog",
      handler: "ieft-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ieft-news/count",
      handler: "ieft-new.count",
    },
    {
      method: "GET",
      path: "/ieft-news/:slug",
      handler: "ieft-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
