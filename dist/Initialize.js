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

var _FacebookProvider = require('./FacebookProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Initialize extends _react.Component {

  componentDidMount() {
    this.prepare();
  }

  prepare() {
    var _this = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const { onReady, handleInit } = _this.props;
      const api = yield handleInit();
      if (onReady) {
        onReady(api);
      }
    })();
  }

  render() {
    const { children, isReady, api } = this.props;

    const childrenProps = {
      isReady,
      api
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  }
}

Initialize.defaultProps = {
  onReady: undefined,
  api: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _FacebookProvider.FacebookContext.Consumer,
  null,
  ({ handleInit, isReady, api }) => _react2.default.createElement(Initialize, (0, _extends3.default)({}, props, {
    handleInit: handleInit,
    isReady: isReady,
    api: api,
    ref: ref
  }))
));
//# sourceMappingURL=Initialize.js.map