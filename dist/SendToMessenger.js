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

// import MessengerSize from './constants/MessengerSize';
// import MessengerColor from './constants/MessengerColor';

class SendToMessenger extends _react.PureComponent {

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
      dataRef,
      size
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: 'fb-send-to-messenger',
        messenger_app_id: messengerAppId,
        page_id: pageId,
        'data-color': color,
        'data-size': size,
        'data-ref': dataRef
      },
      children
    );
  }
}

SendToMessenger.defaultProps = {
  color: undefined,
  size: undefined,
  dataRef: undefined,
  children: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(SendToMessenger, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=SendToMessenger.js.map