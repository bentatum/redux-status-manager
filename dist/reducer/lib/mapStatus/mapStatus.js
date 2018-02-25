"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (state, action) => {
  const status = (0, _lodash.get)(action, 'payload.status');
  const type = (0, _lodash.get)(action, 'payload.type');
  const statuses = (0, _lodash.get)(state, 'statuses', {});
  statuses[type] = status;
  return _extends({}, state, statuses);
};

exports.default = _default;