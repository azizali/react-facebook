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

class MessageUs extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      color,
      messengerAppId,
      pageId,
      children,
      size
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: 'fb-messengermessageus',
        messenger_app_id: messengerAppId,
        page_id: pageId,
        color: color,
        size: size
      },
      children
    );
  }
}

MessageUs.defaultProps = {
  color: undefined,
  size: undefined,
  children: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(MessageUs, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=MessageUs.js.map