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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FacebookProvider = require('./FacebookProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Initialize = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Initialize, _Component);

  function Initialize() {
    (0, _classCallCheck3.default)(this, Initialize);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Initialize.prototype.componentDidMount = function componentDidMount() {
    this.prepare();
  };

  Initialize.prototype.prepare = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _props, onReady, handleInit, api;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _props = this.props, onReady = _props.onReady, handleInit = _props.handleInit;
              _context.next = 3;
              return handleInit();

            case 3:
              api = _context.sent;

              if (onReady) {
                onReady(api);
              }

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function prepare() {
      return _ref.apply(this, arguments);
    }

    return prepare;
  }();

  Initialize.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        isReady = _props2.isReady,
        api = _props2.api;


    var childrenProps = {
      isReady: isReady,
      api: api
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  };

  return Initialize;
}(_react.Component), _class.defaultProps = {
  onReady: undefined,
  api: undefined
}, _temp);
exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(
    _FacebookProvider.FacebookContext.Consumer,
    null,
    function (_ref2) {
      var handleInit = _ref2.handleInit,
          isReady = _ref2.isReady,
          api = _ref2.api;
      return _react2.default.createElement(Initialize, (0, _extends3.default)({}, props, {
        handleInit: handleInit,
        isReady: isReady,
        api: api,
        ref: ref
      }));
    }
  );
});