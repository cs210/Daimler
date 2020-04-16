webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Difficulty.js":
/*!****************************************!*\
  !*** ./pages/components/Difficulty.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _CategoriesButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CategoriesButton */ "./pages/components/CategoriesButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");






var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/Difficulty.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var DifficultyComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DifficultyComponent, _Component);

  function DifficultyComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DifficultyComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DifficultyComponent).call(this, props));
    _this.state = {
      chosenDifficulty: "",
      easy: false,
      medium: false,
      hard: false,
      startGame: false
    };
    _this.onClickEasy = _this.onClickEasy.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClickMedium = _this.onClickMedium.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClickHard = _this.onClickHard.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClickStartGame = _this.onClickStartGame.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DifficultyComponent, [{
    key: "onClickEasy",
    value: function onClickEasy() {
      this.setState({
        easy: !this.state.easy
      });
      this.setState({
        chosenDifficulty: "easy"
      });
      this.setState({
        medium: false
      });
      this.setState({
        hard: false
      });
    }
  }, {
    key: "onClickMedium",
    value: function onClickMedium() {
      this.setState({
        medium: !this.state.medium
      });
      this.setState({
        chosenDifficulty: "medium"
      });
      this.setState({
        easy: false
      });
      this.setState({
        hard: false
      });
    }
  }, {
    key: "onClickHard",
    value: function onClickHard() {
      this.setState({
        hard: !this.state.hard
      });
      this.setState({
        chosenDifficulty: "hard"
      });
      this.setState({
        easy: false
      });
      this.setState({
        medium: false
      });
    }
  }, {
    key: "onClickStartGame",
    value: function onClickStartGame() {
      //Send to Questions screen the chosen difficulty
      this.setState({
        startGame: !this.state.startGame
      }); //Send to Questions screen

      this.props.callback("QUESTIONS", this.state.chosenDifficulty); //this.props.callback("QUESTIONS")
    }
  }, {
    key: "render",
    value: function render() {
      var easyButton = this.state.easy ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Easy",
        onClick: this.onClickEasy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Easy",
        onClick: this.onClickEasy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });
      var mediumButton = this.state.medium ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Medium",
        onClick: this.onClickMedium,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Medium",
        onClick: this.onClickMedium,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      });
      var hardButton = this.state.hard ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Hard",
        onClick: this.onClickHard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Hard",
        onClick: this.onClickHard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }); //Currently the Start Button will look the same as the other buttons

      var startButton = __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "START",
        onClick: this.onClickStartGame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      });

      return __jsx("div", {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " CHOOSE A DIFFICULTY "), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].row,
        spacing: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, easyButton, mediumButton, hardButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].row,
        spacing: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, startButton));
    }
  }]);

  return DifficultyComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DifficultyComponent);

/***/ })

})
//# sourceMappingURL=index.js.1be42f16659ea8606dc8.hot-update.js.map