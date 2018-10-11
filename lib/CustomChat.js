'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomChat = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(CustomChat, _PureComponent);

  function CustomChat() {
    (0, _classCallCheck3.default)(this, CustomChat);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
  }

  CustomChat.prototype.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;

    handleParse();
  };

  CustomChat.prototype.render = function render() {
    var _props = this.props,
        minimized = _props.minimized,
        children = _props.children,
        pageId = _props.pageId,
        themeColor = _props.themeColor,
        loggedInGreeting = _props.loggedInGreeting,
        loggedOutGreeting = _props.loggedOutGreeting,
        dataRef = _props.dataRef;


    return _react2.default.createElement(
      'div',
      {
        className: 'fb-customerchat',
        page_id: pageId,
        minimized: minimized,
        theme_color: themeColor,
        logged_in_greeting: loggedInGreeting,
        logged_out_greeting: loggedOutGreeting,
        'data-ref': dataRef
      },
      children
    );
  };

  return CustomChat;
}(_react.PureComponent), _class.defaultProps = {
  minimized: undefined,
  children: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  dataRef: undefined
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Parser2.default,
    null,
    function (_ref) {
      var handleParse = _ref.handleParse;
      return _react2.default.createElement(CustomChat, (0, _extends3.default)({}, props, {
        handleParse: handleParse,
        ref: ref
      }));
    }
  );
});