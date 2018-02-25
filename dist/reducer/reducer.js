"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionTypes = require("../actionTypes");

var _lib = require("./lib");

var _default = (state = {}, action = {}) => {
  switch (action.type) {
    case _actionTypes.STATUS:
      return (0, _lib.mapStatus)(state, action);

    default:
      return state;
  }
};

exports.default = _default;