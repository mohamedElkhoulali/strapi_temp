"use strict";

/**
 * wis-crm-link controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::wis-crm-link.wis-crm-link",
  ({ strapi }) => ({
    async getCampusesByAction(ctx) {
      const query = {
        fields: "id",
        populate: {
          campuses: {
            fields: ["label", "slug"],
          },
        },
        filters: {
          courseEmpty: true,
          action: ctx.params.action,
        },
      };

      const entities = await strapi.entityService.findMany(
        "api::wis-crm-link.wis-crm-link",
        query
      );

      const data = [];

      // get the names and slug for each campuses without duplicates
      entities.forEach(({ campuses }) => {
        campuses.forEach(({ slug, label }) => {
          if (!data.find((el) => el.slug === slug)) {
            data.push({ slug, name: label });
          }
        });
      });

      return data;
    },
    async getCrmLinkByCampusAndAction(ctx) {
      const query = {
        filters: {
          courseEmpty: true,
          action: ctx.params.action,
          campuses: {
            slug: ctx.params.campus,
          },
        },
        pagination: {
          limit: 1,
        },
      };

      const entities = await strapi.entityService.findMany(
        "api::wis-crm-link.wis-crm-link",
        query
      );

      if (entities.length) {
        return entities[0];
      }
    },
  })
);