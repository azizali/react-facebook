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

class Comments extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      colorScheme,
      href = (0, _getCurrentHref2.default)(),
      numPosts,
      orderBy,
      width,
      children,
      mobile
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: 'fb-comments',
        'data-colorscheme': colorScheme,
        'data-numposts': numPosts,
        'data-href': href,
        'data-order-by': orderBy,
        'data-width': width,
        'data-skin': colorScheme,
        'data-mobile': mobile
      },
      children
    );
  }
}
Comments.defaultProps = {
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  mobile: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(Comments, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=Comments.js.map