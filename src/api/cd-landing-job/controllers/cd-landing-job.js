"use strict";

/**
 * cd-landing-job controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { userHelper } = strapi.config.functions.helpers;

module.exports = createCoreController(
  "api::cd-landing-job.cd-landing-job",
  ({ strapi }) => ({
    async find(ctx) {
      if (!ctx.query.populate) {
        ctx.query.populate =
          strapi.config["population-schemas"].singleTypes.landingJob;
      }

      const entity = await strapi.entityService.findMany(
        "api::cd-landing-job.cd-landing-job",
        ctx.query
      );

      if (userHelper.isAuthenticatedUser(ctx)) {
        const schools = await strapi.config.functions.schools.getIds(ctx);

        const filteredJobs = entity?.job_offers?.filter((offer) => {
          return schools.includes(offer?.school?.id);
        });

        entity.job_offers = filteredJobs;
      }

      return entity;
    },
  })
);