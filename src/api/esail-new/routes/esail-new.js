"use strict";

/**
 * esail-new router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/esail-news",
      handler: "esail-new.find",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/esail-news/pagination-infos/:newsPerPage",
      handler: "esail-new.paginationInfos",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/esail-blog",
      handler: "esail-new.findBlog",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "GET",
      path: "/esail-news/count",
      handler: "esail-new.count",
    },
    {
      method: "GET",
      path: "/esail-news/:slug",
      handler: "esail-new.findOne",
      config: {
        middlewares: ["global::exclude-unpublished"],
      },
    },
    {
      method: "POST",
      path: "/esail-news",
      handler: "esail-new.create",
    },
  ],
};
