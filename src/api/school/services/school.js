"use strict";

/**
 * school service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::school.school", ({ strapi }) => ({
  async find(query) {
    // on renomme le paramètre campuses pour gérer la relation schools-campuses buguée
    if (query.filters?.campuses) {
      query.filters.campuses2 = query.filters.campuses;
      delete query.filters.campuses;
    }

    const entities = await strapi.entityService.findMany("api::school.school", {
      ...query,
      populate: strapi.config["population-schemas"].collections.school,
    });

    // on re-renomme le paramètre campuses2 pour avoir une forme cohérente dans les données retournées
    for (const key in entities) {
      entities[key].campuses = entities[key].campuses2;
      delete entities[key].campuses2;
    }

    return entities;
  },
  async findOne(id, query = {}) {
    const entity = await strapi.entityService.findOne(
      "api::school.school",
      id,
      {
        ...query,
        populate: strapi.config["population-schemas"].collections.school,
      }
    );

    // on renomme le paramètre campuses2 pour avoir une forme cohérente dans les données retournées
    entity.campuses = entity.campuses2;
    delete entity.campuses2;

    return entity;
  },
}));
