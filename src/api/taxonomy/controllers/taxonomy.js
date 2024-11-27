"use strict";

/**
 * taxonomy controller
 */

module.exports = {
  async find(ctx) {
    const entity = await strapi.config.functions.namespace.find(
      ctx,
      "taxonomy"
    );

    return strapi.service("api::taxonomy.taxonomy").transformToObject(entity);
  },
  async update(ctx) {
    let data = await strapi.config.functions.namespace.find(ctx, "taxonomy");
    const currentEntity = strapi
      .service("api::taxonomy.taxonomy")
      .transformToObject(data);
    // get user sended data
    const userData = ctx.request.body;
    // get difference between saved and user data
    const { unsavedData } = strapi
      .service("api::taxonomy.taxonomy")
      .checkDataFromUser(currentEntity, userData);
    // create new data
    await strapi.service("api::taxonomy.taxonomy").saveItems(ctx, unsavedData);
    // request all data
    data = await strapi.config.functions.namespace.find(ctx, "taxonomy");
    return strapi.service("api::taxonomy.taxonomy").transformToObject(data);
  },
  async findLastUpdateDate(ctx) {
    return strapi.service("api::taxonomy.taxonomy").getUpdateDate(ctx);
  },
};
