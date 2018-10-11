'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getLoginStatus = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(api) {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.getLoginStatus();

          case 2:
            response = _context.sent;
            return _context.abrupt('return', response.status);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getLoginStatus(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Initialize = require('./Initialize');

var _Initialize2 = _interopRequireDefault(_Initialize);

var _Subscribe = require('./Subscribe');

var _Subscribe2 = _interopRequireDefault(_Subscribe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Status = function (_Component) {
  (0, _inherits3.default)(Status, _Component);

  function Status() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Status);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      loading: true
    }, _this.handleReady = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(api) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = _this;
                _context2.next = 3;
                return getLoginStatus(api);

              case 3:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  status: _context2.t1,
                  loading: false
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.handleStatusChange = function (response) {
      _this.setState({
        status: response.status,
        loading: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Status.prototype.render = function render() {
    var children = this.props.children;
    var _state = this.state,
        status = _state.status,
        loading = _state.loading;


    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      _react2.default.createElement(
        _Subscribe2.default,
        { event: 'auth.statusChange', onChange: this.handleStatusChange },
        children({
          status: status,
          loading: loading
        })
      )
    );
  };

  return Status;
}(_react.Component);

exports.default = Status;