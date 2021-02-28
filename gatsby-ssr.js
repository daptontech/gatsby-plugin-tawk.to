"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var tawkId = pluginOptions.tawkId;
  var source = "https://embed.tawk.to/" + tawkId;
  return setPostBodyComponents([/*#__PURE__*/_react["default"].createElement("script", {
    key: "gatsby-plugin-tawk.to",
    src: source
  })]);
};
