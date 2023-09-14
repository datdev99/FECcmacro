"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Header = _interopRequireDefault(require("@/components/Header/Header"));
var _react = _interopRequireDefault(require("react"));
var _broker = _interopRequireDefault(require("./broker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var page = function page() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("main", {
    className: "bg-1"
  }, /*#__PURE__*/_react.default.createElement(_broker.default, null)));
};
var _default = page;
exports.default = _default;