'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = ShareButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShareButton(props) {
  const {
    className,
    children
  } = props,
        rest = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

  return _react2.default.createElement(
    _Share2.default,
    rest,
    ({ loading, handleClick }) => _react2.default.createElement(
      'button',
      {
        type: 'button',
        disabled: loading,
        className: className,
        onClick: handleClick
      },
      children
    )
  );
}

ShareButton.defaultProps = (0, _extends3.default)({}, _Share2.default.defaultProps, {
  className: undefined
});
//# sourceMappingURL=ShareButton.js.map