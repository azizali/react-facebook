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

class Like extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      href = (0, _getCurrentHref2.default)(),
      layout,
      colorScheme,
      action,
      showFaces,
      share,
      children,
      width,
      size,
      kidDirectedSite,
      referral
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: 'fb-like',
        'data-ref': referral,
        'data-href': href,
        'data-layout': layout,
        'data-colorscheme': colorScheme,
        'data-action': action,
        'data-show-faces': showFaces,
        'data-share': share,
        'data-width': width,
        'data-size': size,
        'data-kid-directed-site': kidDirectedSite
      },
      children
    );
  }
}
Like.defaultProps = {
  layout: undefined,
  showFaces: undefined,
  colorScheme: undefined,
  action: undefined,
  share: undefined,
  size: undefined,
  kidDirectedSite: undefined,
  children: undefined,
  href: undefined,
  referral: undefined,
  width: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(Like, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=Like.js.map