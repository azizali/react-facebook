'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CustomChat extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      minimized,
      children,
      pageId,
      themeColor,
      loggedInGreeting,
      loggedOutGreeting,
      dataRef
    } = this.props;

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
  }
}

CustomChat.defaultProps = {
  minimized: undefined,
  children: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  dataRef: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(CustomChat, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=CustomChat.js.map