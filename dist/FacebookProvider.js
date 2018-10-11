'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookContext = undefined;

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _Facebook = require('./Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FacebookContext = exports.FacebookContext = (0, _react.createContext)();

let api = null;

class Facebook extends _react.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      isReady: false
    }, this.handleInit = (0, _asyncToGenerator3.default)(function* () {
      // do not run if SSR
      if (!_canUseDom2.default) {
        throw new Error('You can not use Facebook without DOM');
      }

      const { isReady } = _this.state;
      if (isReady) {
        return api;
      }

      if (!api) {
        const {
          domain,
          version,
          appId,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait
        } = _this.props;

        api = new _Facebook2.default({
          domain,
          appId,
          version,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait
        });
      }

      yield api.init();

      if (!_this.state.isReady) {
        _this.setState({
          isReady: true
        });
      }

      return api;
    }), _temp;
  }

  componentDidMount() {
    const { wait } = this.props;
    if (!wait) {
      this.handleInit();
    }
  }

  render() {
    const { children } = this.props;
    const { isReady, error } = this.state;
    const { handleInit } = this;

    const value = {
      isReady,
      error,
      handleInit,
      api
    };

    return _react2.default.createElement(
      FacebookContext.Provider,
      { value: value },
      children
    );
  }
}
exports.default = Facebook;
Facebook.defaultProps = {
  version: 'v3.1',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false
};
//# sourceMappingURL=FacebookProvider.js.map