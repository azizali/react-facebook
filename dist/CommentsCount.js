'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommentsCount extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      href = (0, _getCurrentHref2.default)(),
      children
    } = this.props;

    return _react2.default.createElement(
      'span',
      {
        className: 'fb-comments-count',
        'data-href': href
      },
      children
    );
  }
}
CommentsCount.defaultProps = {
  href: undefined,
  children: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(CommentsCount, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=CommentsCount.js.map