'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

let getLoginStatus = (() => {
  var _ref = (0, _asyncToGenerator3.default)(function* (api) {
    const response = yield api.getLoginStatus();

    return response.status;
  });

  return function getLoginStatus(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Initialize = require('./Initialize');

var _Initialize2 = _interopRequireDefault(_Initialize);

var _Subscribe = require('./Subscribe');

var _Subscribe2 = _interopRequireDefault(_Subscribe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Status extends _react.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      loading: true
    }, this.handleReady = (() => {
      var _ref2 = (0, _asyncToGenerator3.default)(function* (api) {
        _this.setState({
          status: yield getLoginStatus(api),
          loading: false
        });
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    })(), this.handleStatusChange = response => {
      this.setState({
        status: response.status,
        loading: false
      });
    }, _temp;
  }

  render() {
    const { children } = this.props;
    const { status, loading } = this.state;

    return _react2.default.createElement(
      _Initialize2.default,
      { onReady: this.handleReady },
      _react2.default.createElement(
        _Subscribe2.default,
        { event: 'auth.statusChange', onChange: this.handleStatusChange },
        children({
          status,
          loading
        })
      )
    );
  }
}
exports.default = Status;
//# sourceMappingURL=Status.js.map