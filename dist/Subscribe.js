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

class LoginStatus extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), _initialiseProps.call(this), _temp;
  }

  componentWillUnmount() {
    const { state: { api }, props: { event } } = this;
    if (api) {
      api.unsubscribe(event, this.handleChange);
    }
  }

  render() {
    const { children } = this.props;

    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      children
    );
  }
}
exports.default = LoginStatus;
LoginStatus.defaultProps = {
  onChange: undefined
};

var _initialiseProps = function () {
  var _this = this;

  this.state = {};

  this.handleReady = (() => {
    var _ref = (0, _asyncToGenerator3.default)(function* (api) {
      const { event } = _this.props;

      _this.setState({
        api
      });

      yield api.subscribe(event, _this.handleChange);
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })();

  this.handleChange = (...args) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(...args);
    }
  };
};
//# sourceMappingURL=Subscribe.js.map