'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Like = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Like, _PureComponent);

  function Like() {
    (0, _classCallCheck3.default)(this, Like);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
  }

  Like.prototype.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;

    handleParse();
  };

  Like.prototype.render = function render() {
    var _props = this.props,
        _props$href = _props.href,
        href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
        layout = _props.layout,
        colorScheme = _props.colorScheme,
        action = _props.action,
        showFaces = _props.showFaces,
        share = _props.share,
        children = _props.children,
        width = _props.width,
        size = _props.size,
        kidDirectedSite = _props.kidDirectedSite,
        referral = _props.referral;


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
  };

  return Like;
}(_react.PureComponent), _class.defaultProps = {
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
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Parser2.default,
    null,
    function (_ref) {
      var handleParse = _ref.handleParse;
      return _react2.default.createElement(Like, (0, _extends3.default)({}, props, {
        handleParse: handleParse,
        ref: ref
      }));
    }
  );
});