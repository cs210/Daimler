webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Questions.js":
/*!***************************************!*\
  !*** ./pages/components/Questions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _stylesheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stylesheet */ "./pages/stylesheet.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Answers */ "./pages/components/Answers.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Categories */ "./pages/components/Categories.js");
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GameOver */ "./pages/components/GameOver.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Feedback */ "./pages/components/Feedback.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constants */ "./pages/constants.js");








var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/Questions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;











var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/index.js").AllHtmlEntities;

var entities = new Entities();
var MAX_NUM_QUESTIONS = 3;
var FEEDBACK_SHOW_TIME_SECS = 2; // component that displays the questions or the game over component

var QuestionsComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(QuestionsComponent, _Component);

  function QuestionsComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, QuestionsComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(QuestionsComponent).call(this, props));
    _this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1,
      questionIndex: 0,
      currentScore: 0,
      showFeedback: false,
      lastQuestionCorrect: false,
      lastQuestionAnswer: "",
      urlLinks: []
    };
    _this.nextQuestion = _this.nextQuestion.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.getUrls = _this.getUrls.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.parseQuestionAnswerFormat = _this.parseQuestionAnswerFormat.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(QuestionsComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUrls();
    } // calls function to fetch the questions before the component mounts

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.onGetQuestions();
    }
    /*
    function: getUrls
    Iterates over the user's selected categories (stored in this.props.cat)
    Creates a custom URL for each category
    Appends to the CustomID array defined in state
     */
    //TODO:
    // Currently, urlLinks is just holding the URL for the last category chosen, not all of them. How do we fix them?
    //We can't use setState in a for loop, because it only updates the state 1 time, so we need a better way

  }, {
    key: "getUrls",
    value: function getUrls() {
      var numQs = "10"; // change this or pass it into the function

      for (var i = 0; i < this.props.cat.length; i++) {
        this.state.urlLinks[i] = "https://opentdb.com/api.php?amount=" + numQs + "&category=" + _constants__WEBPACK_IMPORTED_MODULE_17__["CATEGORIES_MAP"][this.props.cat[i]] + "&difficulty=" + this.props.diff;
      } //Add URL LINK to array
      //    var link = this.state.urlLinks.concat(customURL)


      this.setState({
        urlLinks: link
      });
    } // fetch quesions from cocktail trivia

  }, {
    key: "onGetQuestions",
    value: function onGetQuestions(category) {
      var finalCateg, difficulty, numQs, response, allData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function onGetQuestions$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              finalCateg = category == null ? "MUSIC" : category; // pass in the category as you wish

              difficulty = this.props.diff;
              numQs = "10"; // change this or pass it into the function

              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch("https://opentdb.com/api.php?amount=" + numQs + "&category=" + _constants__WEBPACK_IMPORTED_MODULE_17__["CATEGORIES_MAP"][finalCateg] + "&difficulty=" + difficulty));

            case 5:
              response = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

            case 8:
              allData = _context.sent;
              // parse the question to the same format
              allData = this.parseQuestionAnswerFormat(allData.results);
              this.setState({
                questionsArr: allData
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    } // shuffles the array of answers for randomness

  }, {
    key: "shuffleArray",
    value: function shuffleArray(a) {
      var j, x, i;

      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }

      return a;
    }
    /*This function parses the result from the API to the same format that was used in the previous API*/

  }, {
    key: "parseQuestionAnswerFormat",
    value: function parseQuestionAnswerFormat(arr) {
      var finalArr = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var questionObj = {};
          questionObj.text = item.question;
          var answers = [{
            text: item.correct_answer,
            correct: true
          }];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(item.incorrect_answers), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var answerObj = _step2.value;
              answers.push({
                text: answerObj,
                correct: false
              });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this.shuffleArray(answers);
          questionObj.answers = answers;
          finalArr.push(questionObj);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return finalArr;
    } //changes to the next question. isCorrect ia a bool for if the previous value was correct. correctAnswer is the correct answer

  }, {
    key: "nextQuestion",
    value: function nextQuestion(isCorrect, correctAnswer) {
      var _this2 = this;

      var score = isCorrect ? this.state.currentScore + 1 : this.state.currentScore;
      var nextQIndex = this.state.questionIndex + 1;
      this.setState({
        lastQuestionCorrect: isCorrect
      });
      this.setState({
        lastQuestionAnswer: correctAnswer
      });
      this.setState({
        showFeedback: true
      });
      setTimeout(function () {
        _this2.setState({
          showFeedback: false
        });
      }, FEEDBACK_SHOW_TIME_SECS * 1000);
      this.setState({
        currentScore: score
      });
      this.setState({
        questionIndex: nextQIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("THESE WERE THE CATEGORIES CHOSEN " + this.props.cat);
      console.log("THIS WAS THE DIFFICULTY CHOSEN " + this.props.diff);
      console.log("THESE ARE THE URLS " + this.state.urlLinks);
      return __jsx("div", {
        style: _stylesheet__WEBPACK_IMPORTED_MODULE_8__["styles"].root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11__["default"], {
        open: this.state.showFeedback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(_Feedback__WEBPACK_IMPORTED_MODULE_15__["default"], {
        wasCorrect: this.state.lastQuestionCorrect,
        correctAnswer: this.state.lastQuestionAnswer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, this.state.questionIndex < MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
        style: _stylesheet__WEBPACK_IMPORTED_MODULE_8__["styles"].questionText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, this.state.questionsArr && entities.decode(this.state.questionsArr[this.state.questionIndex].text), " "), __jsx(_Answers__WEBPACK_IMPORTED_MODULE_12__["default"], {
        answers: this.state.questionsArr && this.state.questionsArr[this.state.questionIndex].answers,
        callback: this.nextQuestion,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), this.state.questionIndex >= MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_GameOver__WEBPACK_IMPORTED_MODULE_14__["default"], {
        score: this.state.currentScore,
        callback: this.props.callback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }))));
    }
  }]);

  return QuestionsComponent;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionsComponent);

/***/ })

})
//# sourceMappingURL=index.js.8cd132b7ef820a1b8973.hot-update.js.map