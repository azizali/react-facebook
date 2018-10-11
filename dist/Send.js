'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _clearUndefinedProperties = require('./utils/clearUndefinedProperties');

var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);

var _Process = require('./Process');

var _Process2 = _interopRequireDefault(_Process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Send extends _react.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.handleClick = (() => {
      var _ref = (0, _asyncToGenerator3.default)(function* (evn) {
        evn.preventDefault();

        const { handleProcess } = _this.props;

        return handleProcess((() => {
          var _ref2 = (0, _asyncToGenerator3.default)(function* (api) {
            const {
              link = (0, _getCurrentHref2.default)(),
              display,
              appId = api.getAppId(),
              to,
              redirectURI
            } = _this.props;

            return api.ui((0, _clearUndefinedProperties2.default)({
              method: 'send',
              link,
              display,
              app_id: appId,
              to,
              redirect_uri: redirectURI
            }));
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        })());
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })(), _temp;
  }

  render() {
    const { children, loading } = this.props;

    return children({
      loading,
      handleClick: this.handleClick
    });
  }
}

Send.defaultProps = {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Process2.default,
  null,
  ({ loading, handleProcess }) => _react2.default.createElement(Send, (0, _extends3.default)({}, props, {
    loading: loading,
    handleProcess: handleProcess,
    ref: ref
  }))
));
//# sourceMappingURL=Send.js.map