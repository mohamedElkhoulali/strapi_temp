"use strict";

/**
 * ileri-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ileri-news",
      handler: "ileri-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ileri-news/pagination-infos/:newsPerPage",
      handler: "ileri-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ileri-blog",
      handler: "ileri-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ileri-news/count",
      handler: "ileri-new.count",
    },
    {
      method: "GET",
      path: "/ileri-news/:slug",
      handler: "ileri-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
