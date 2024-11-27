const namespace = require("./functions/namespace");
const controllerOverride = require("./functions/controller-override");
const schools = require("./functions/schools");
const profile = require("./functions/profile");
const utils = require("./functions/utils.js");
const lifecycles = require("./functions/helpers/lifecycles.js");
const userHelper = require("./functions/helpers/user");

module.exports = {
  namespace,
  controllerOverride,
  schools,
  profile,
  utils,
  helpers: {
    lifecycles,
    userHelper,
  },
};
