"use strict";

/**
 * wis-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/wis-news",
      handler: "wis-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/wis-news/pagination-infos/:newsPerPage",
      handler: "wis-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/wis-blog",
      handler: "wis-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/wis-news/count",
      handler: "wis-new.count",
    },
    {
      method: "GET",
      path: "/wis-news/:slug",
      handler: "wis-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
