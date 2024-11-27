"use strict";
const _ = require("lodash");

/**
 * new controller
 */

module.exports = {
  async find(ctx, next) {
    const _limit = ctx.query._limit || 100;
    const _start = ctx.query._start || 0;
    const _sort = ctx.query.sort;

    ctx.query._limit = -1;
    ctx.query._start = 0;

    const schoolsResult = await strapi.config.functions.schools.find(
      ctx,
      "api::new.new",
      strapi.config["population-schemas"].collections.news
    );
    const namespaceResult = await strapi.config.functions.namespace.find(
      ctx,
      "new",
      strapi.config["population-schemas"].collections.news
    );

    let entities;

    if (schoolsResult.length == 0) {
      entities = namespaceResult;
    } else if (namespaceResult.length == 0) {
      entities = schoolsResult;
    } else {
      entities = _.concat(schoolsResult, namespaceResult);
    }

    if (!_sort) {
      entities = _.orderBy(entities, ["updatedAt"], ["asc"]);
    } else {
      const sorts = _sort.split(",");
      const sProps = sorts.map((item) => item.split(":")[0]);
      const sOrders = sorts.map((item) => item.split(":")[1].toLowerCase());
      entities = _.orderBy(entities, sProps, sOrders);
    }

    return entities.length > 0 ? entities.slice(_start, _start + _limit) : [];
  },
  async findOne(ctx, next) {
    let entity = await strapi.config.functions.schools.findOne(
      ctx,
      "api::new.new",
      strapi.config["population-schemas"].collections.news
    );

    if (!entity) {
      entity = await strapi.config.functions.namespace.findOne(
        ctx,
        "new",
        strapi.config["population-schemas"].collections.news
      );
    }

    return entity;
  },
  async count(ctx, next) {
    const countForSchools = await strapi.config.functions.schools.count(
      ctx,
      "api::new.new"
    );
    const countForNamespace = await strapi.config.functions.namespace.count(
      ctx,
      "new"
    );
    return countForSchools + countForNamespace;
  },
};
