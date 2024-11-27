"use strict";

/**
 * campus-contact custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/campus-contacts/count",
      handler: "campus-contact.count",
    },
    {
      method: "GET",
      path: "/campus-contacts/all",
      handler: "campus-contact.all",
    },
  ],
};
