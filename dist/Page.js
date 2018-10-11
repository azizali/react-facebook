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

class Page extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      style,
      href = (0, _getCurrentHref2.default)(),
      tabs,
      hideCover,
      width,
      height,
      showFacepile,
      hideCTA,
      smallHeader,
      adaptContainerWidth,
      children
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: 'fb-page',
        style: style,
        'data-tabs': tabs,
        'data-hide-cover': hideCover,
        'data-show-facepile': showFacepile,
        'data-hide-cta': hideCTA,
        'data-href': href,
        'data-small-header': smallHeader,
        'data-adapt-container-width': adaptContainerWidth,
        'data-height': height,
        'data-width': width
      },
      children
    );
  }
}
Page.defaultProps = {
  width: undefined,
  height: undefined,
  tabs: undefined,
  hideCover: undefined,
  showFacepile: undefined,
  hideCTA: undefined,
  smallHeader: undefined,
  adaptContainerWidth: undefined,
  children: undefined,
  style: undefined,
  href: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(Page, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=Page.js.map