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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmbeddedVideo = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(EmbeddedVideo, _PureComponent);

  function EmbeddedVideo() {
    (0, _classCallCheck3.default)(this, EmbeddedVideo);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
  }

  EmbeddedVideo.prototype.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;

    handleParse();
  };

  EmbeddedVideo.prototype.render = function render() {
    var _props = this.props,
        href = _props.href,
        width = _props.width,
        showText = _props.showText,
        allowFullScreen = _props.allowFullScreen,
        autoPlay = _props.autoPlay,
        showCaptions = _props.showCaptions,
        children = _props.children;


    return _react2.default.createElement(
      'div',
      {
        className: 'fb-video',
        'data-href': href,
        'data-width': width,
        'data-show-text': showText,
        'data-show-captions': showCaptions,
        'data-autoplay': autoPlay,
        'data-allowfullscreen': allowFullScreen
      },
      children
    );
  };

  return EmbeddedVideo;
}(_react.PureComponent), _class.defaultProps = {
  width: undefined,
  showText: undefined,
  allowFullScreen: undefined,
  autoPlay: undefined,
  showCaptions: undefined,
  children: undefined
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Parser2.default,
    null,
    function (_ref) {
      var handleParse = _ref.handleParse;
      return _react2.default.createElement(EmbeddedVideo, (0, _extends3.default)({}, props, {
        handleParse: handleParse,
        ref: ref
      }));
    }
  );
});