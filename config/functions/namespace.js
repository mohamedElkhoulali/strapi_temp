"use strict";

const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;
const userHelper = require("./helpers/user");

/**
 * Retrieves the namespace for the current user
 * @param   {Object}      ctx
 * @returns {String|null}  - the namespace found or null
 */
function getNamespace(ctx) {
  if (
    (userHelper.isAuthenticatedUser(ctx) || userHelper.isGlobalUser(ctx)) &&
    userHelper.hasNamespace(ctx)
  ) {
    return ctx.state.user.namespace;
  }
  return null;
}

/**
 * Retrieves the service id for a given namespace and entity name
 * @param   {String}  namespace
 * @param   {String}  entity
 * @returns {String}
 */
function getServiceIdentifier(namespace, entity) {
  return `api::${namespace}-${entity}.${namespace}-${entity}`;
}

/**
 * Retrieve the service and the content-type for a given namespace and the name of an entity (collection or single type)
 * @param   {String}  namespace
 * @param   {String}  entity
 * @returns {Object}  { service, contentType }
 */
function getServiceByNamespace(namespace, entity) {
  if (namespace) {
    const id = getServiceIdentifier(namespace, entity);
    const service = strapi.services[id];
    const contentType = strapi.contentType(id);

    return { service, contentType };
  }
  return null;
}

/**
 * Retrieves the service for the current context and for an entity given
 * @param   {Object}  ctx
 * @param   {String}  entity
 * @returns {Object}  { model, service }
 */
function getService(ctx, entity) {
  const namespace = getNamespace(ctx);
  return getServiceByNamespace(namespace, entity);
}

/**
 * A module to handle request to be filtered by the namespace of the current user
 * @module config.functions.namespace
 */
module.exports = {
  /**
   * retrieves multiples entities of a given content-type, filtered by the namespace of the current user
   * @param   {Object}            ctx
   * @param   {String}            entityBaseName  - ex : taxonomy
   * @param   {Array|String|null} [populate=null]
   * @returns {Array|null}
   */
  async find(ctx, entityBaseName, populate = null) {
    const { contentType } = getService(ctx, entityBaseName);

    if (populate) {
      ctx.query.populate = populate;
    }

    if (contentType) {
      const namespace = getNamespace(ctx);
      const modelUid = getServiceIdentifier(namespace, entityBaseName);

      const entities = await strapi.entityService.findMany(modelUid, ctx.query);

      return await contentAPI.output(entities, contentType, ctx.state.auth);
    }

    return null;
  },
  /**
   * retrieves the entity of a given content-type (that represent a Single Type), filtered by the namespace of the current user
   * @param   {Object}            ctx
   * @param   {String}            entityBaseName - ex : taxonomy
   * @param   {Array|String|null} [populate=null]
   * @returns {Array|null}
   */
  async findSingle(ctx, entityBaseName, populate = null) {
    const { service, contentType } = getService(ctx, entityBaseName);
    const { query } = ctx;

    if (populate) {
      query.populate = populate;
    }

    if (service && contentType) {
      let entities = await service.find(query);

      return await contentAPI.output(entities, contentType, ctx.state.auth);
    }

    return null;
  },
  /**
   * Retrieves a single entity for a given content-type, depending on a slug and filtered by the namespace of the current user
   * @param   {Object}            ctx
   * @param   {String}            entityBaseName - ex : taxonomy
   * @param   {Array|String|null} [populate=null]
   * @returns {Object}
   */
  async findOne(ctx, entityBaseName, populate = null) {
    const namespace = getNamespace(ctx);
    const serviceId = getServiceIdentifier(namespace, entityBaseName);

    const response =
      await strapi.config.functions.controllerOverride.findOneBySlug(
        ctx,
        serviceId,
        populate
      );

    return response;
  },
  /**
   * Count the entities of a given content-type that are related to the namespace of the current user
   * @param   {Object} ctx
   * @param   {String} entityBaseName - ex : taxonomy
   * @returns {Number}
   */
  async count(ctx, entityBaseName) {
    const res = await this.find(ctx, entityBaseName);

    if (res) {
      return res.length;
    }

    return 0;
  },
  /**
   * Create an entry in a namespaced collection for a content-type base name
   * @param   {Object}        ctx
   * @param   {String}        entityBaseName - ex : taxonomy
   * @param   {Object}        item
   * @returns {Object|null} - newly created entity or null
   */
  async create(ctx, entityBaseName, item) {
    const { service, contentType } = getService(ctx, entityBaseName);

    if (service && contentType) {
      let entities = await service.create({
        data: item,
      });

      return await contentAPI.output(entities, contentType, ctx.state.auth);
    }

    return null;
  },
  /**
   * Delete an entry in a namespaced collection for a content-type base name and an entity id
   * @param   {Object} ctx
   * @param   {String} entityBaseName - ex : taxonomy
   * @param   {Number} itemId
   * @returns {Object|null} - deleted entity or null
   */
  async delete(ctx, entityBaseName, itemId) {
    const { service, contentType } = getService(ctx, entityBaseName);

    if (service && contentType) {
      let entities = await service.delete(itemId);

      return await contentAPI.output(entities, contentType, ctx.state.auth);
    }

    return null;
  },
  /**
   * Get a list of namespaces.
   * You will still need to check if the content type you want to use with those namespaces exists.
   * @returns Get the list of all namespaces created
   * @returns {Array} - list of namespaces
   */
  async getNamespaces() {
    const namespaces = await strapi.entityService.findMany(
      "plugin::users-permissions.user",
      {
        fields: ["namespace"],
      }
    );
    return namespaces.map((n) => {
      return n.namespace;
    });
  },
};
