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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Initialize = require('./Initialize');

var _Initialize2 = _interopRequireDefault(_Initialize);

var _Subscribe = require('./Subscribe');

var _Subscribe2 = _interopRequireDefault(_Subscribe);

var _Fields = require('./constants/Fields');

var _Fields2 = _interopRequireDefault(_Fields);

var _LoginStatus = require('./constants/LoginStatus');

var _LoginStatus2 = _interopRequireDefault(_LoginStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Profile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      loading: true
    }, _this.handleReady = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(api) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.api = api;

                _this.updateProfile();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), _this.handleStatusChange = function () {
      _this.updateProfile();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Profile.prototype.updateProfile = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var api, fields, response, _profile;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              api = this.api, fields = this.props.fields;

              if (api) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.prev = 3;
              _context2.next = 6;
              return api.getLoginStatus();

            case 6:
              response = _context2.sent;

              if (!(response.status !== _LoginStatus2.default.CONNECTED)) {
                _context2.next = 10;
                break;
              }

              this.setState({
                profile: undefined,
                loading: false,
                error: undefined
              });

              return _context2.abrupt('return');

            case 10:
              _context2.next = 12;
              return api.getProfile({
                fields: fields
              });

            case 12:
              _profile = _context2.sent;


              this.setState({
                profile: _profile,
                loading: false,
                error: undefined
              });
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2['catch'](3);

              this.setState({
                profile: undefined,
                loading: false,
                error: _context2.t0
              });

            case 19:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 16]]);
    }));

    function updateProfile() {
      return _ref2.apply(this, arguments);
    }

    return updateProfile;
  }();

  Profile.prototype.render = function render() {
    var children = this.props.children;
    var _state = this.state,
        profile = _state.profile,
        loading = _state.loading,
        error = _state.error;


    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      _react2.default.createElement(
        _Subscribe2.default,
        { event: 'auth.statusChange', onChange: this.handleStatusChange },
        children({
          profile: profile,
          loading: loading,
          error: error
        })
      )
    );
  };

  return Profile;
}(_react.Component), _class.defaultProps = {
  fields: _Fields2.default
}, _temp2);
exports.default = Profile;