import { styles } from "../stylesheet";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import AnswersComponent from "./Answers";
import GameOverComponent from "./GameOver";
import FeedbackComponent from "./Feedback";
import { CATEGORIES_MAP } from "../constants";

const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();

const MAX_NUM_QUESTIONS = 10;
const FEEDBACK_SHOW_TIME_SECS = 2;

// component that displays the questions or the game over component
class QuestionsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1,
      questionIndex: 0,
      currentScore: 0,
      showFeedback: false,
      lastQuestionCorrect: false,
      lastQuestionAnswer: "",
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.getUrls = this.getUrls.bind(this);
    this.parseQuestionAnswerFormat = this.parseQuestionAnswerFormat.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  // calls function to fetch the questions before the component mounts
  componentWillMount() {
    this.onGetQuestions(this.props.cat);
  }

  /*
  function: getUrls
  Iterates over the user's selected categories (stored in this.props.cat)
  Creates a custom URL for each category
  Returns an array with all the URLS to fetch
  */
  getUrls(categories) {
    var urls = [];
    var customURL = "";
    const numQs = MAX_NUM_QUESTIONS; // TODO: HOW MANY QUESTIONS SHOULD WE ASK? this or pass it into the function DUMMY FUNCTION
    for (var i = 0; i < categories.length; i++) {
      customURL =
        "https://opentdb.com/api.php?amount=" +
        numQs +
        "&category=" +
        CATEGORIES_MAP[categories[i]] +
        "&difficulty=" +
        this.props.diff;
      //Add URL LINK to array
      urls.push(customURL);
    }
    return urls;
  }

  // fetch quesions from cocktail trivia
  async onGetQuestions(category) {
    var chosenCategories = this.props.cat;
    const allUrls = this.getUrls(chosenCategories);
    const finalCateg = category == null ? "MUSIC" : category; // pass in the array of categories.
    const difficulty = this.props.diff;
    const numQs = MAX_NUM_QUESTIONS; // change this or pass it into the function

    let json;
    var allData = [];
    let catQuestionsAndAnswers;
    let fetchRequest;

    for (var i = 0; i < allUrls.length; i++) {
      fetchRequest = await fetch(allUrls[i]);
      json = await fetchRequest.json();
      catQuestionsAndAnswers = this.parseQuestionAnswerFormat(json.results);
      allData = allData.concat(catQuestionsAndAnswers);
    }

    this.shuffleArray(allData);
    allData.slice(0, MAX_NUM_QUESTIONS);

    console.log(allData);

    this.setState({ questionsArr: allData });
  }

  // shuffles the array of answers for randomness
  shuffleArray(a) {
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
  parseQuestionAnswerFormat(arr) {
    const finalArr = [];
    for (const item of arr) {
      const questionObj = {};
      questionObj.text = item.question;
      const answers = [{ text: item.correct_answer, correct: true }];
      for (const answerObj of item.incorrect_answers) {
        answers.push({ text: answerObj, correct: false });
      }
      this.shuffleArray(answers);
      questionObj.answers = answers;
      finalArr.push(questionObj);
    }
    return finalArr;
  }

  //changes to the next question. isCorrect ia a bool for if the previous value was correct. correctAnswer is the correct answer
  nextQuestion(isCorrect, correctAnswer) {
    const score = isCorrect
      ? this.state.currentScore + 1
      : this.state.currentScore;
    const nextQIndex = this.state.questionIndex + 1;

    this.setState({ lastQuestionCorrect: isCorrect });
    this.setState({ lastQuestionAnswer: correctAnswer });
    this.setState({ showFeedback: true });
    setTimeout(() => {
      this.setState({ showFeedback: false });
    }, FEEDBACK_SHOW_TIME_SECS * 1000);

    this.setState({ currentScore: score });
    this.setState({ questionIndex: nextQIndex });
  }

  render() {
    return (
      <div style={styles.root}>
        <Backdrop open={this.state.showFeedback} style={styles.feedbackWrapper}>
          <FeedbackComponent
            wasCorrect={this.state.lastQuestionCorrect}
            correctAnswer={this.state.lastQuestionAnswer}
          />
        </Backdrop>

        <Grid container direction="column" justify="center" alignItems="center">
          {this.state.questionIndex < MAX_NUM_QUESTIONS && (
            <>
              <p style={styles.questionText}>
                {this.state.questionsArr &&
                  entities.decode(
                    this.state.questionsArr[this.state.questionIndex].text
                  )}{" "}
              </p>
              <AnswersComponent
                answers={
                  this.state.questionsArr &&
                  this.state.questionsArr[this.state.questionIndex].answers
                }
                callback={this.nextQuestion}
              ></AnswersComponent>
            </>
          )}

          {this.state.questionIndex >= MAX_NUM_QUESTIONS && (
            <>
              <GameOverComponent
                score={this.state.currentScore}
                callback={this.props.callback}
              ></GameOverComponent>
            </>
          )}
        </Grid>
      </div>
    );
  }
}
export default QuestionsComponent;