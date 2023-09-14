"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _image = _interopRequireDefault(require("next/image"));
var _react = _interopRequireDefault(require("react"));
var _brokerImg = _interopRequireDefault(require("@/assets/images/broker-img.webp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Broker = function Broker() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "broker-box"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Best online broker")), /*#__PURE__*/_react.default.createElement("div", {
    className: "broker-box__logo"
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    src: _brokerImg.default,
    width: 64,
    height: 64,
    alt: "a"
  })), /*#__PURE__*/_react.default.createElement("h3", null, "Interactive Brokers"), /*#__PURE__*/_react.default.createElement("p", null, "Recommended for traders looking for broad market access and a professional trading environment"), /*#__PURE__*/_react.default.createElement("div", null));
};
var _default = Broker;
exports.default = _default;