'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Initialize = require('./Initialize');

var _Initialize2 = _interopRequireDefault(_Initialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Parser extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, this.handleReady = api => {
      this.setState({
        api
      }, this.handleParse);
    }, this.handleContainer = container => {
      this.setState({
        container
      }, this.handleParse);
    }, this.handleParse = () => {
      const { api, container } = this.state;
      if (!api || !container) {
        return;
      }

      api.parse(container);
    }, _temp;
  }

  render() {
    const { className, children } = this.props;

    return _react2.default.createElement(
      'div',
      { className: className, ref: this.handleContainer },
      _react2.default.createElement(
        _Initialize2.default,
        { onReady: this.handleReady },
        children({
          handleParse: this.handleParse
        })
      )
    );
  }
}
exports.default = Parser;
Parser.defaultProps = {
  className: undefined
};
//# sourceMappingURL=Parser.js.map