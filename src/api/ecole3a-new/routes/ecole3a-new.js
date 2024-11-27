"use strict";

/**
 * ecole3a-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ecole3a-news",
      handler: "ecole3a-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ecole3a-news/pagination-infos/:newsPerPage",
      handler: "ecole3a-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ecole3a-blog",
      handler: "ecole3a-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/ecole3a-news/count",
      handler: "ecole3a-new.count",
    },
    {
      method: "GET",
      path: "/ecole3a-news/:slug",
      handler: "ecole3a-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
