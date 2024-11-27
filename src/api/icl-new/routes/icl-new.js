"use strict";

/**
 * icl-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/icl-news",
      handler: "icl-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/icl-news/pagination-infos/:newsPerPage",
      handler: "icl-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/icl-blog",
      handler: "icl-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/icl-news/count",
      handler: "icl-new.count",
    },
    {
      method: "GET",
      path: "/icl-news/:slug",
      handler: "icl-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
