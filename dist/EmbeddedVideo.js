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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EmbeddedVideo extends _react.PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      href,
      width,
      showText,
      allowFullScreen,
      autoPlay,
      showCaptions,
      children
    } = this.props;

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
  }
}

EmbeddedVideo.defaultProps = {
  width: undefined,
  showText: undefined,
  allowFullScreen: undefined,
  autoPlay: undefined,
  showCaptions: undefined,
  children: undefined
};
exports.default = (0, _react.forwardRef)((props, ref) => _react2.default.createElement(
  _Parser2.default,
  null,
  ({ handleParse }) => _react2.default.createElement(EmbeddedVideo, (0, _extends3.default)({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=EmbeddedVideo.js.map