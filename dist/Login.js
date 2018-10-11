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

var _Process = require('./Process');

var _Process2 = _interopRequireDefault(_Process);

var _Fields = require('./constants/Fields');

var _Fields2 = _interopRequireDefault(_Fields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Login extends _react.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.handleClick = (() => {
      var _ref = (0, _asyncToGenerator3.default)(function* (evn) {
        evn.preventDefault();

        const { handleProcess, onCompleted, onError } = _this.props;

        try {
          yield handleProcess((() => {
            var _ref2 = (0, _asyncToGenerator3.default)(function* (api) {
              const {
                scope, fields, returnScopes, rerequest, reauthorize, eventKey
              } = _this.props;
              const loginQpts = { scope };
              const authType = [];

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

              const response = yield api.login(loginQpts);
              if (response.status !== 'connected') {
                throw new Error('Unauthorized user');
              }

              const data = yield api.getTokenDetailWithProfile({ fields });

              if (onCompleted) {
                yield onCompleted((0, _extends3.default)({}, data, {
                  eventKey
                }));
              }

              return data;
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          })());
        } catch (error) {
          if (onError) {
            onError(error);
          }
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })(), _temp;
  }

  render() {
    const {
      children, loading, error, data
    } = this.props;

    return children({
      loading,
      handleClick: this.handleClick,
      error,
      data
    });
  }
}
Login.defaultProps = {
  scope: '',
  fields: _Fields2.default,
  returnScopes: false,
  rerequest: false,
  reauthorize: false,
  onCompleted: undefined,
  onError: undefined,
  eventKey: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Process2.default,
  null,
  ({
    loading, handleProcess, data, error
  }) => _react2.default.createElement(Login, (0, _extends3.default)({}, props, {
    loading: loading,
    handleProcess: handleProcess,
    data: data,
    error: error,
    ref: ref
  }))
));
//# sourceMappingURL=Login.js.map