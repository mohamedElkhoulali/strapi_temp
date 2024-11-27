"use strict";

/**
 * vivamundi-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/vivamundi-news",
      handler: "vivamundi-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/vivamundi-news/pagination-infos/:newsPerPage",
      handler: "vivamundi-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/vivamundi-blog",
      handler: "vivamundi-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/vivamundi-news/count",
      handler: "vivamundi-new.count",
    },
    {
      method: "GET",
      path: "/vivamundi-news/:slug",
      handler: "vivamundi-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
  ],
};
