"use strict";

/**
 * campus-geozone custom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/campus-geozones/count",
      handler: "campus-geozone.count",
    },
  ],
};
