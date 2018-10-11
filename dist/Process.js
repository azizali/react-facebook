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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Process extends _react.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      api: undefined
    }, this.handleProcess = (() => {
      var _ref = (0, _asyncToGenerator3.default)(function* (fn) {
        _this.setState({
          data: undefined,
          error: undefined,
          loading: true
        });

        try {
          const { api } = _this.state;
          if (!api) {
            throw new Error('Facebook is not initialized. Wait for isReady');
          }

          const data = yield fn(api);

          _this.setState({
            data,
            loading: false
          });

          return data;
        } catch (error) {
          _this.setState({
            error,
            loading: false
          });

          throw error;
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })(), this.handleReady = api => {
      this.setState({
        api
      });
    }, _temp;
  }

  render() {
    const { children } = this.props;
    const {
      api, loading, data, error
    } = this.state;

    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      children({
        loading: !api || loading,
        handleProcess: this.handleProcess,
        data,
        error
      })
    );
  }
}
exports.default = Process;
//# sourceMappingURL=Process.js.map