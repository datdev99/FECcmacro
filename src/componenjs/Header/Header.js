"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logo = _interopRequireDefault(require("@/assets/images/logo.svg"));
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Header = function Header() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "c-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c-header__inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c-header__logo"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    src: _logo.default,
    width: 160,
    height: 60,
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("nav", {
    className: "menu"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://brokerchooser.com/broker-reviews"
  }, "Broker Reviews")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://brokerchooser.com/compare-brokers"
  }, "Compare Brokers")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://brokerchooser.com/how-to-invest"
  }, "How to Invest")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://brokerchooser.com/blog"
  }, "Blog")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://brokerchooser.com/about-us"
  }, "About Us"))))))));
};
var _default = Header;
exports.default = _default;