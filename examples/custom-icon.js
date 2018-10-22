webpackJsonp([15],{

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
throw new Error("Cannot find module \"rc-select\"");
throw new Error("Cannot find module \"rc-select/assets/index.less\"");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint no-console: 0 */
/* eslint react/no-multi-comp: 0 */






var arrowPath = 'M632 888H392c-4.4 0-8 3.6-8 8v32c0 ' + '17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-3' + '2c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-3' + '28 328 0 121.4 66 227.4 164 284.1V792c0 17.7 1' + '4.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98' + '-56.7 164-162.7 164-284.1 0-181.1-146.9-328-32' + '8-328z m127.9 549.8L604 634.6V752H420V634.6l-3' + '5.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4' + ' 114.6-256 256-256s256 114.6 256 256c0 92.5-49' + '.4 176.3-128.1 221.8z';

var clearPath = 'M793 242H366v-74c0-6.7-7.7-10.4-12.9' + '-6.3l-142 112c-4.1 3.2-4.1 9.4 0 12.6l142 112c' + '5.2 4.1 12.9 0.4 12.9-6.3v-74h415v470H175c-4.4' + ' 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-' + '28.7 64-64V306c0-35.3-28.7-64-64-64z';

var menuItemSelectedIcon = function menuItemSelectedIcon(props) {
  var p = _objectWithoutProperties(props, []);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: { position: 'absolute', right: 0 } },
    p.isSelected ? '🌹' : '☑️'
  );
};

var singleItemIcon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'span',
  { style: { position: 'absolute', right: '0px' }, role: 'img', 'aria-label': 'rose' },
  '\uD83C\uDF39'
);

var getSvg = function getSvg(path) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'i',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'svg',
      {
        viewBox: '0 0 1024 1024',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        style: { verticalAlign: '-.125em ' }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: path, 'p-id': '5827' })
    )
  );
};

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      disabled: false,
      value: ''
    }, _this.onChange = function (value, option) {
      console.log('onChange', value, option);
      _this.setState({
        value: value
      });
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 13) {
        console.log('onEnter', _this.state.value);
      }
    }, _this.onSelect = function (v, option) {
      console.log('onSelect', v, option);
    }, _this.toggleDisabled = function () {
      _this.setState({
        disabled: !_this.state.disabled
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'combobox'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: this.toggleDisabled },
            'toggle disabled'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { width: 300 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_select___default.a,
            {
              className: 'custom-select',
              disabled: this.state.disabled,
              style: { width: 500 },
              onChange: this.onChange,
              onSelect: this.onSelect,
              onInputKeyDown: this.onKeyDown,
              notFoundContent: '',
              allowClear: true,
              placeholder: 'please select',
              value: this.state.value,
              combobox: true,
              backfill: true,
              inputIcon: getSvg(arrowPath, {
                className: 'custom-arrow-icon'
              }, true),
              clearIcon: getSvg(clearPath, {
                className: 'custom-clear-icon'
              }, true),
              removeIcon: getSvg(clearPath, {
                className: 'custom-remove-icon'
              }, true),
              menuItemSelectedIcon: singleItemIcon
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
              { value: 'jack' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                { style: { color: 'red' } },
                'jack'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
              { value: 'lucy' },
              'lucy'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
              { value: 'disabled', disabled: true },
              'disabled'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
              { value: 'yiminghe' },
              'yiminghe'
            )
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var children = [];
for (var i = 10; i < 36; i++) {
  children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_rc_select__["Option"],
    { key: i.toString(36) + i, disabled: i === 10, title: '\u4E2D\u6587' + i },
    '\u4E2D\u6587',
    i
  ));
}

var Test = function (_React$Component2) {
  _inherits(Test, _React$Component2);

  function Test() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Test);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref2, [this].concat(args))), _this2), _initialiseProps.call(_this2), _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      var dropdownMenuStyle = {
        maxHeight: 200
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'multiple select\uFF08scroll the menu\uFF09'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            'anim',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { checked: this.state.useAnim, type: 'checkbox', onChange: this.useAnim })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { width: 300 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_select___default.a,
            {
              className: 'custom-select',
              value: this.state.value,
              animation: this.state.useAnim ? 'slide-up' : null,
              choiceTransitionName: 'rc-select-selection__choice-zoom',
              dropdownMenuStyle: dropdownMenuStyle,
              style: { width: 500 },
              multiple: true,
              allowClear: true,
              optionFilterProp: 'children',
              optionLabelProp: 'children',
              onSelect: this.onSelect,
              onDeselect: this.onDeselect,
              placeholder: 'please select',
              onChange: this.onChange,
              onFocus: function onFocus() {
                return console.log('focus');
              },
              tokenSeparators: [' ', ','],
              inputIcon: getSvg(arrowPath),
              clearIcon: getSvg(clearPath),
              removeIcon: getSvg(clearPath),
              menuItemSelectedIcon: menuItemSelectedIcon
            },
            children
          )
        )
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    useAnim: 0,
    value: ['a10']
  };

  this.onChange = function (value, options) {
    console.log('onChange', value, options);
    _this3.setState({
      value: value
    });
  };

  this.onSelect = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    console.log(args);
  };

  this.onDeselect = function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    console.log(args);
  };

  this.useAnim = function (e) {
    _this3.setState({
      useAnim: e.target.checked
    });
  };
};

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Demo, null),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null)
), document.getElementById('__react-content'));

/***/ })

},[79]);
//# sourceMappingURL=custom-icon.js.map