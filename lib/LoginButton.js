'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = LoginButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSpinnerChildren = require('react-spinner-children');

var _reactSpinnerChildren2 = _interopRequireDefault(_reactSpinnerChildren);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoginButton(props) {
  var children = props.children,
      className = props.className,
      spinner = props.spinner,
      spinnerConfig = props.spinnerConfig,
      rest = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'spinner', 'spinnerConfig']);


  return _react2.default.createElement(
    _Login2.default,
    rest,
    function (_ref) {
      var loading = _ref.loading,
          handleClick = _ref.handleClick;
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: className,
          onClick: handleClick,
          disabled: loading
        },
        children,
        spinner && loading && _react2.default.createElement(_reactSpinnerChildren2.default, {
          config: spinnerConfig
        })
      );
    }
  );
}

LoginButton.defaultProps = (0, _extends3.default)({}, _Login2.default.defaultProps, {
  className: undefined,
  spinnerConfig: {},
  spinner: true
});