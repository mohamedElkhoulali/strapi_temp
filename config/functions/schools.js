"use strict";

const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;
const userHelper = require("./helpers/user");

/**
 * Retrieves the schools related to the current user
 * @param   {Object} ctx
 * @returns {Array}
 */
async function getSchoolsForContext(ctx) {
  if (userHelper.isAuthenticatedUser(ctx)) {
    const user = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      ctx.state.user.id,
      {
        populate: ["schools"],
      }
    );

    return user.schools;
  }
  return [];
}

/**
 * Get the ids of the schools related to the current user
 * @param   {Object} ctx
 * @returns {Array}
 */
async function getSchoolsIdsForContext(ctx) {
  const schools = await getSchoolsForContext(ctx);
  return schools.map((school) => school.id);
}

/**
 * A module to handle request to be filtered by the schools of the current user
 * @module config.functions.schools
 * @infos les methodes getAllCampuses et getAllCampusesIds n'ont pas été migrées vers la v4 car elle n'étaient jamais appelées dans la v3 (code mort)
 */
module.exports = {
  /**
   * Retrieves de schools Ids for the current user
   * @param   {Object} ctx
   * @returns {Array}
   */
  async getIds(ctx) {
    return await getSchoolsIdsForContext(ctx);
  },
  /**
   * alias for find
   * Retrieves the entities linked to all the schools of the current user for a given content type
   * @param   {Object}        ctx
   * @param   {String}        serviceIdentifier  - ex: api::course.course
   * @param   {Array|String}  [populate=[]]
   * @returns {Array}
   */
  async findForEachSchools(ctx, serviceIdentifier, populate = []) {
    return this.find(ctx, serviceIdentifier, populate);
  },
  /**
   * Retrieves the entities linked to all the schools of the current user for a given content type
   * @param   {Object}        ctx
   * @param   {String}        serviceIdentifier  - ex: api::course.course
   * @param   {Array|String}  [populate=[]]
   * @returns {Array}
   */
  async find(ctx, serviceIdentifier, populate = []) {
    const schools = await getSchoolsIdsForContext(ctx);

    const contentType = strapi.contentType(serviceIdentifier);

    if (contentType) {
      const sanitizedQueryParams = await contentAPI.query(
        ctx.query,
        contentType,
        ctx.state.auth
      );

      let query;

      // depending on the relation type (hasOne, hasMany) filter label can be 'school' or 'schools'
      if (contentType.attributes.schools) {
        query = strapi.config.functions.utils.addFilterToQuery(
          sanitizedQueryParams,
          {
            schools: schools,
          }
        );
      } else {
        query = strapi.config.functions.utils.addFilterToQuery(
          sanitizedQueryParams,
          {
            school: schools,
          }
        );
      }

      const entities = await strapi.entityService.findMany(contentType.uid, {
        ...query,
        populate: populate,
      });

      return await contentAPI.output(entities, contentType, ctx.state.auth);
    }

    return [];
  },
  /**
   * Retrieves an entity by slug for a given content-type name. This method looks for the slug in the context parameters
   * @param   {Object} ctx
   * @param   {String} modelName - ex: api::course.course
   * @param   {Array|String}  [populate=null]
   * @returns {Object}
   */
  async findOne(ctx, modelName, populate = null) {
    const entity =
      await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        modelName,
        populate
      );

    return entity;
  },
  /**
   * Retrieves an entity by id for a given content-type name. This method looks for the id in the context parameters
   * @param   {Object} ctx
   * @param   {String} modelName - ex : api::course.course
   * @param   {Array|String}  [populate=null]
   * @returns {Object}
   */
  async findOneById(ctx, modelName, populate = null) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne(modelName, id, {
      populate: populate,
    });

    return entity;
  },
  /**
   * Count the entities of a content-type related to the schools of the current user
   * @param   {Object} ctx
   * @param   {String} serviceIdentifier - ex : api::course.course
   * @returns {Number}
   */
  async count(ctx, serviceIdentifier) {
    const schools = await getSchoolsIdsForContext(ctx);

    const contentType = strapi.contentType(serviceIdentifier);
    const sanitizedQueryParams = await contentAPI.query(
      ctx.query,
      contentType,
      ctx.state.auth
    );

    let query;

    // depending on the relation type (hasOne, hasMany) filter label can be 'school' or 'schools'
    if (contentType.attributes.schools) {
      query = strapi.config.functions.utils.addFilterToQuery(
        sanitizedQueryParams,
        {
          schools: schools,
        }
      );
    } else {
      query = strapi.config.functions.utils.addFilterToQuery(
        sanitizedQueryParams,
        {
          school: schools,
        }
      );
    }

    const entities = await strapi.entityService.findMany(
      contentType.uid,
      query
    );

    return entities.length || 0;
  },
};
