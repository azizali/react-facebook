'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Process = require('./Process');

var _Process2 = _interopRequireDefault(_Process);

var _Fields = require('./constants/Fields');

var _Fields2 = _interopRequireDefault(_Fields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(evn) {
        var _this$props, handleProcess, onCompleted, onError;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evn.preventDefault();

                _this$props = _this.props, handleProcess = _this$props.handleProcess, onCompleted = _this$props.onCompleted, onError = _this$props.onError;
                _context2.prev = 2;
                _context2.next = 5;
                return handleProcess(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(api) {
                    var _this$props2, scope, fields, returnScopes, rerequest, reauthorize, eventKey, loginQpts, authType, response, data;

                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this$props2 = _this.props, scope = _this$props2.scope, fields = _this$props2.fields, returnScopes = _this$props2.returnScopes, rerequest = _this$props2.rerequest, reauthorize = _this$props2.reauthorize, eventKey = _this$props2.eventKey;
                            loginQpts = { scope: scope };
                            authType = [];


                            if (returnScopes) {
                              loginQpts.return_scopes = true;
                            }

                            if (rerequest) {
                              authType.push('rerequest');
                            }

                            if (reauthorize) {
                              authType.push('reauthenticate');
                            }

                            if (authType.length) {
                              loginQpts.auth_type = authType.join(',');
                            }

                            _context.next = 9;
                            return api.login(loginQpts);

                          case 9:
                            response = _context.sent;

                            if (!(response.status !== 'connected')) {
                              _context.next = 12;
                              break;
                            }

                            throw new Error('Unauthorized user');

                          case 12:
                            _context.next = 14;
                            return api.getTokenDetailWithProfile({ fields: fields });

                          case 14:
                            data = _context.sent;

                            if (!onCompleted) {
                              _context.next = 18;
                              break;
                            }

                            _context.next = 18;
                            return onCompleted((0, _extends3.default)({}, data, {
                              eventKey: eventKey
                            }));

                          case 18:
                            return _context.abrupt('return', data);

                          case 19:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 5:
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](2);

                if (onError) {
                  onError(_context2.t0);
                }

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Login.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        loading = _props.loading,
        error = _props.error,
        data = _props.data;


    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Login;
}(_react.Component), _class.defaultProps = {
  scope: '',
  fields: _Fields2.default,
  returnScopes: false,
  rerequest: false,
  reauthorize: false,
  onCompleted: undefined,
  onError: undefined,
  eventKey: undefined
}, _temp2);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Process2.default,
    null,
    function (_ref3) {
      var loading = _ref3.loading,
          handleProcess = _ref3.handleProcess,
          data = _ref3.data,
          error = _ref3.error;
      return _react2.default.createElement(Login, (0, _extends3.default)({}, props, {
        loading: loading,
        handleProcess: handleProcess,
        data: data,
        error: error,
        ref: ref
      }));
    }
  );
});