'use strict';

exports.__esModule = true;
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Initialize = require('./Initialize');

var _Initialize2 = _interopRequireDefault(_Initialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginStatus = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(LoginStatus, _Component);

  function LoginStatus() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LoginStatus);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  LoginStatus.prototype.componentWillUnmount = function componentWillUnmount() {
    var api = this.state.api,
        event = this.props.event;

    if (api) {
      api.unsubscribe(event, this.handleChange);
    }
  };

  LoginStatus.prototype.render = function render() {
    var children = this.props.children;


    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      children
    );
  };

  return LoginStatus;
}(_react.Component), _class.defaultProps = {
  onChange: undefined
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {};

  this.handleReady = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(api) {
      var event;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event = _this2.props.event;


              _this2.setState({
                api: api
              });

              _context.next = 4;
              return api.subscribe(event, _this2.handleChange);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  this.handleChange = function () {
    var onChange = _this2.props.onChange;


    if (onChange) {
      onChange.apply(undefined, arguments);
    }
  };
}, _temp2);
exports.default = LoginStatus;