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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Initialize = require('./Initialize');

var _Initialize2 = _interopRequireDefault(_Initialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Process = function (_Component) {
  (0, _inherits3.default)(Process, _Component);

  function Process() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Process);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      api: undefined
    }, _this.handleProcess = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(fn) {
        var _api, _data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  data: undefined,
                  error: undefined,
                  loading: true
                });

                _context.prev = 1;
                _api = _this.state.api;

                if (_api) {
                  _context.next = 5;
                  break;
                }

                throw new Error('Facebook is not initialized. Wait for isReady');

              case 5:
                _context.next = 7;
                return fn(_api);

              case 7:
                _data = _context.sent;


                _this.setState({
                  data: _data,
                  loading: false
                });

                return _context.abrupt('return', _data);

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](1);

                _this.setState({
                  error: _context.t0,
                  loading: false
                });

                throw _context.t0;

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), _this.handleReady = function (api) {
      _this.setState({
        api: api
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Process.prototype.render = function render() {
    var children = this.props.children;
    var _state = this.state,
        api = _state.api,
        loading = _state.loading,
        data = _state.data,
        error = _state.error;


    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      children({
        loading: !api || loading,
        handleProcess: this.handleProcess,
        data: data,
        error: error
      })
    );
  };

  return Process;
}(_react.Component);

exports.default = Process;