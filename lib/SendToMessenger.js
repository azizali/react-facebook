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

// import MessengerSize from './constants/MessengerSize';
// import MessengerColor from './constants/MessengerColor';

var SendToMessenger = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(SendToMessenger, _PureComponent);

  function SendToMessenger() {
    (0, _classCallCheck3.default)(this, SendToMessenger);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
  }

  SendToMessenger.prototype.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;

    handleParse();
  };

  SendToMessenger.prototype.render = function render() {
    var _props = this.props,
        color = _props.color,
        messengerAppId = _props.messengerAppId,
        pageId = _props.pageId,
        children = _props.children,
        dataRef = _props.dataRef,
        size = _props.size;


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
  };

  return SendToMessenger;
}(_react.PureComponent), _class.defaultProps = {
  color: undefined,
  size: undefined,
  dataRef: undefined,
  children: undefined
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Parser2.default,
    null,
    function (_ref) {
      var handleParse = _ref.handleParse;
      return _react2.default.createElement(SendToMessenger, (0, _extends3.default)({}, props, {
        handleParse: handleParse,
        ref: ref
      }));
    }
  );
});