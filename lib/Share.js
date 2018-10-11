'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _clearUndefinedProperties = require('./utils/clearUndefinedProperties');

var _clearUndefinedProperties2 = _interopRequireDefault(_clearUndefinedProperties);

var _Process = require('./Process');

var _Process2 = _interopRequireDefault(_Process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Share = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Share, _Component);

  function Share() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(evn) {
        var handleProcess;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evn.preventDefault();

                handleProcess = _this.props.handleProcess;
                return _context2.abrupt('return', handleProcess(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(api) {
                    var _this$props, _this$props$href, href, display, _this$props$appId, appId, hashtag, redirectURI, quote, mobileIframe;

                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this$props = _this.props, _this$props$href = _this$props.href, href = _this$props$href === undefined ? (0, _getCurrentHref2.default)() : _this$props$href, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === undefined ? api.getAppId() : _this$props$appId, hashtag = _this$props.hashtag, redirectURI = _this$props.redirectURI, quote = _this$props.quote, mobileIframe = _this$props.mobileIframe;
                            return _context.abrupt('return', api.ui((0, _clearUndefinedProperties2.default)({
                              method: 'share',
                              href: href,
                              display: display,
                              app_id: appId,
                              hashtag: hashtag,
                              redirect_uri: redirectURI,
                              quote: quote,
                              mobile_iframe: mobileIframe
                            })));

                          case 2:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Share.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        loading = _props.loading,
        error = _props.error,
        data = _props.data;


    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Share;
}(_react.Component), _class.defaultProps = {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
}, _temp2);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _Process2.default,
    null,
    function (_ref3) {
      var loading = _ref3.loading,
          handleProcess = _ref3.handleProcess,
          data = _ref3.data,
          error = _ref3.error;
      return _react2.default.createElement(Share, (0, _extends3.default)({}, props, {
        loading: loading,
        handleProcess: handleProcess,
        data: data,
        error: error,
        ref: ref
      }));
    }
  );
});