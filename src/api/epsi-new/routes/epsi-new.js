"use strict";

/**
 * epsi-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/epsi-news",
      handler: "epsi-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/epsi-news/pagination-infos/:newsPerPage",
      handler: "epsi-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/epsi-blog",
      handler: "epsi-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/epsi-news/count",
      handler: "epsi-new.count",
    },
    {
      method: "GET",
      path: "/epsi-news/:slug",
      handler: "epsi-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
