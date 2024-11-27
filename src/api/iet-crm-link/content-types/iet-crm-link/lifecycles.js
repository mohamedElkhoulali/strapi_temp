"use strict";

module.exports = {
  async beforeUpdate({ model, params: { data, where } }) {
    const modelName = model.uid;
    data = await strapi.config.functions.utils.fixEmptyRelations(
      modelName,
      data,
      where
    );
  },
  async beforeCreate({ model, params: { data, where } }) {
    const modelName = model.uid;
    data = await strapi.config.functions.utils.fixEmptyRelations(
      modelName,
      data,
      where
    );
  },
};
