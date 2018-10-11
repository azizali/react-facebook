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

class Group extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      style,
      href = (0, _getCurrentHref2.default)(),
      width,
      showSocialContext,
      showMetaData,
      children,
      skin
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: 'fb-group',
        style: style,
        'data-href': href,
        'data-width': width,
        'data-show-social-context': showSocialContext,
        'data-show-metadata': showMetaData,
        'data-skin': skin
      },
      children
    );
  }
}
Group.defaultProps = {
  showSocialContext: undefined,
  showMetaData: undefined,
  width: undefined,
  children: undefined,
  style: undefined,
  href: undefined,
  skin: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(Group, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=Group.js.map