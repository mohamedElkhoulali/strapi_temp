"use strict";

/**
 * figs-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/figs-news",
      handler: "figs-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/figs-news/pagination-infos/:newsPerPage",
      handler: "figs-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/figs-blog",
      handler: "figs-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/figs-news/count",
      handler: "figs-new.count",
    },
    {
      method: "GET",
      path: "/figs-news/:slug",
      handler: "figs-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "POST",
      path: "/figs-news",
      handler: "figs-new.create",
    },
  ],
};
