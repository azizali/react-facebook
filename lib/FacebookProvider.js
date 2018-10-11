'use strict';

exports.__esModule = true;
exports.default = exports.FacebookContext = undefined;

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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _Facebook = require('./Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookContext = exports.FacebookContext = (0, _react.createContext)();
var api = null;

var Facebook = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Facebook, _Component);

  function Facebook() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Facebook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isReady: false
    }, _this.handleInit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var isReady, _this$props, _domain, _version, _appId, _cookie, _status, _xfbml, _language, _frictionlessRequests, _wait;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_canUseDom2.default) {
                _context.next = 2;
                break;
              }

              throw new Error('You can not use Facebook without DOM');

            case 2:
              isReady = _this.state.isReady;

              if (!isReady) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', api);

            case 5:

              if (!api) {
                _this$props = _this.props, _domain = _this$props.domain, _version = _this$props.version, _appId = _this$props.appId, _cookie = _this$props.cookie, _status = _this$props.status, _xfbml = _this$props.xfbml, _language = _this$props.language, _frictionlessRequests = _this$props.frictionlessRequests, _wait = _this$props.wait;


                api = new _Facebook2.default({
                  domain: _domain,
                  appId: _appId,
                  version: _version,
                  cookie: _cookie,
                  status: _status,
                  xfbml: _xfbml,
                  language: _language,
                  frictionlessRequests: _frictionlessRequests,
                  wait: _wait
                });
              }

              _context.next = 8;
              return api.init();

            case 8:

              if (!_this.state.isReady) {
                _this.setState({
                  isReady: true
                });
              }

              return _context.abrupt('return', api);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Facebook.prototype.componentDidMount = function componentDidMount() {
    var wait = this.props.wait;

    if (!wait) {
      this.handleInit();
    }
  };

  Facebook.prototype.render = function render() {
    var children = this.props.children;
    var _state = this.state,
        isReady = _state.isReady,
        error = _state.error;
    var handleInit = this.handleInit;


    var value = {
      isReady: isReady,
      error: error,
      handleInit: handleInit,
      api: api
    };

    return _react2.default.createElement(
      FacebookContext.Provider,
      { value: value },
      children
    );
  };

  return Facebook;
}(_react.Component), _class.defaultProps = {
  version: 'v3.1',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false
}, _temp2);
exports.default = Facebook;