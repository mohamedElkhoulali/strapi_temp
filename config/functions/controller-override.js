"use strict";

const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;

/**
 * A utility module to export usefull methods that can be used by every controllers
 * @module config.functions.controllerOverride
 */
module.exports = {
  /**
   * Retrieves and entity by slug
   * @param   {Object}                  ctx
   * @param   {String}                  modelUid - ex : api::course.course
   * @param   {String|Array|Object}     [populate=null] - ex: "*" to populate all fields, ["focusImage"] to populate a list of fields, { courses: { populate: { profile: true, school: true } } } for deep population
   * @returns {Object|null}
   */
  async findOneBySlug(ctx, modelUid, populate = null) {
    const { slug } = ctx.params;
    const contentType = strapi.contentType(modelUid);

    const filters = {
      slug,
      ...ctx.query?.filters,
    };

    try {
      const entities = await strapi.entityService.findMany(modelUid, {
        ...ctx.query,
        filters,
        populate,
      });

      if (entities.length) {
        return await contentAPI.output(
          entities[0],
          contentType,
          ctx.state.auth
        );
      }
    } catch (e) {
      return null;
    }
  },
};
