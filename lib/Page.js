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

var Page = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Page, _PureComponent);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
  }

  Page.prototype.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;

    handleParse();
  };

  Page.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        _props$href = _props.href,
        href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
        tabs = _props.tabs,
        hideCover = _props.hideCover,
        width = _props.width,
        height = _props.height,
        showFacepile = _props.showFacepile,
        hideCTA = _props.hideCTA,
        smallHeader = _props.smallHeader,
        adaptContainerWidth = _props.adaptContainerWidth,
        children = _props.children;


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
  };

  return Page;
}(_react.PureComponent), _class.defaultProps = {
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
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Parser2.default,
    null,
    function (_ref) {
      var handleParse = _ref.handleParse;
      return _react2.default.createElement(Page, (0, _extends3.default)({}, props, {
        handleParse: handleParse,
        ref: ref
      }));
    }
  );
});