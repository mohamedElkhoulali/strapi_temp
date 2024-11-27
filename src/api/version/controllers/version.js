"use strict";

/**
 * version controller
 */

module.exports = {
  async find(ctx) {
    const { version } = require("../../../../package.json");
    return version;
  },
};
