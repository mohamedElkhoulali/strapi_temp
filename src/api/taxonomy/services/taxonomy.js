"use strict";

/**
 * taxonomy service
 */
const { userHelper } = strapi.config.functions.helpers;
const store = strapi.config.store.taxonomy;

function _createObjectDepths(obj, depths, value) {
  if (depths.length === 1) {
    const path = depths[0];
    obj[path] = value;
  } else {
    const path = depths.shift();
    if (!obj[path]) {
      obj[path] = {};
    }
    obj[path] = _createObjectDepths(obj[path], depths, value);
  }
  return obj;
}

function _getPath(path, key, separator = ".") {
  return path === "" ? key : `${path}${separator}${key}`;
}

function _flatten(obj, path = "", result = []) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        _flatten(obj[key], _getPath(path, key), result);
      } else {
        result.push({
          code: _getPath(path, key),
          value: obj[key],
        });
      }
    }
  }
  return result;
}

function _flattenByKeys(obj, path = "", result = {}) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        _flattenByKeys(obj[key], _getPath(path, key, "#"), result);
      } else {
        result[_getPath(path, key, "#")] = obj[key];
      }
    }
  }
  return result;
}

module.exports = {
  transformToObject(data) {
    let result = {};

    for (const item of data) {
      const depths = item.code.split(".");
      result = _createObjectDepths(result, depths, item.value);
    }

    return result;
  },
  flattenObject(obj) {
    return _flatten(obj);
  },
  checkDataFromUser(currentData, userData) {
    const currentKeys = _flattenByKeys(currentData);
    const userKeys = _flattenByKeys(userData);
    const unsavedDataKeys = Object.keys(userKeys).filter((key) => {
      return !currentKeys.hasOwnProperty(key);
    });

    const unusedDataKeys = Object.keys(currentKeys).filter((key) => {
      return !userKeys.hasOwnProperty(key);
    });

    return {
      unsavedData: unsavedDataKeys.map((key) => ({
        code: key.replace(/#/g, "."),
        value: userKeys[key],
      })),
      unusedData: unusedDataKeys.map((key) => ({
        code: key.replace(/#/g, "."),
      })),
    };
  },
  async saveItems(ctx, items) {
    for (const item of items) {
      await strapi.config.functions.namespace.create(ctx, "taxonomy", item);
    }
  },
  async deleteItems(ctx, items) {
    for (const item of items) {
      await strapi.config.functions.namespace.delete(ctx, "taxonomy", item);
    }
  },
  saveUpdateDate(namespace) {
    const dateString = new Date().toISOString();
    store.mutations.SET_LAST_UPDATE_DATE_FOR_NAMESPACE(namespace, dateString);
  },
  getUpdateDate(ctx) {
    if (userHelper.hasNamespace(ctx)) {
      const namespace = ctx.state.user.namespace;
      const date = store.getters.getLastUpdateDateForNamespace(namespace);
      return date ?? null;
    }
  },
};
