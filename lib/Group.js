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

var Group = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Group, _PureComponent);

  function Group() {
    (0, _classCallCheck3.default)(this, Group);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
  }

  Group.prototype.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;

    handleParse();
  };

  Group.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        _props$href = _props.href,
        href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
        width = _props.width,
        showSocialContext = _props.showSocialContext,
        showMetaData = _props.showMetaData,
        children = _props.children,
        skin = _props.skin;


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
  };

  return Group;
}(_react.PureComponent), _class.defaultProps = {
  showSocialContext: undefined,
  showMetaData: undefined,
  width: undefined,
  children: undefined,
  style: undefined,
  href: undefined,
  skin: undefined
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Parser2.default,
    null,
    function (_ref) {
      var handleParse = _ref.handleParse;
      return _react2.default.createElement(Group, (0, _extends3.default)({}, props, {
        handleParse: handleParse,
        ref: ref
      }));
    }
  );
});