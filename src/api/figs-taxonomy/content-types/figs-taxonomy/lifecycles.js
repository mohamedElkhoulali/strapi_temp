"use strict";

const namespace = "figs";

function _saveUpdateDate() {
  const date = new Date().toISOString();
  strapi.service("api::taxonomy.taxonomy").saveUpdateDate(namespace, date);
}

module.exports = {
  async afterUpdate() {
    _saveUpdateDate();
  },
  async afterCreate() {
    _saveUpdateDate();
  },
  async afterDelete() {
    _saveUpdateDate();
  },
  async afterDeleteMany() {
    _saveUpdateDate();
  },
};
