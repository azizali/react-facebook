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

var Comments = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Comments, _PureComponent);

  function Comments() {
    (0, _classCallCheck3.default)(this, Comments);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
  }

  Comments.prototype.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;

    handleParse();
  };

  Comments.prototype.render = function render() {
    var _props = this.props,
        colorScheme = _props.colorScheme,
        _props$href = _props.href,
        href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
        numPosts = _props.numPosts,
        orderBy = _props.orderBy,
        width = _props.width,
        children = _props.children,
        mobile = _props.mobile;


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
  };

  return Comments;
}(_react.PureComponent), _class.defaultProps = {
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  mobile: undefined
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Parser2.default,
    null,
    function (_ref) {
      var handleParse = _ref.handleParse;
      return _react2.default.createElement(Comments, (0, _extends3.default)({}, props, {
        handleParse: handleParse,
        ref: ref
      }));
    }
  );
});