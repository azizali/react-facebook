'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

class Profile extends _react.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      loading: true
    }, this.handleReady = (() => {
      var _ref = (0, _asyncToGenerator3.default)(function* (api) {
        _this.api = api;

        _this.updateProfile();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })(), this.handleStatusChange = () => {
      this.updateProfile();
    }, _temp;
  }

  updateProfile() {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const { api, props: { fields } } = _this2;
      if (!api) {
        return;
      }

      try {
        const response = yield api.getLoginStatus();
        if (response.status !== _LoginStatus2.default.CONNECTED) {
          _this2.setState({
            profile: undefined,
            loading: false,
            error: undefined
          });

          return;
        }

        const profile = yield api.getProfile({
          fields
        });

        _this2.setState({
          profile,
          loading: false,
          error: undefined
        });
      } catch (error) {
        _this2.setState({
          profile: undefined,
          loading: false,
          error
        });
      }
    })();
  }

  render() {
    const { children } = this.props;
    const { profile, loading, error } = this.state;

    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      _react2.default.createElement(
        _Subscribe2.default,
        { event: 'auth.statusChange', onChange: this.handleStatusChange },
        children({
          profile,
          loading,
          error
        })
      )
    );
  }
}
exports.default = Profile;
Profile.defaultProps = {
  fields: _Fields2.default
};
//# sourceMappingURL=Profile.js.map