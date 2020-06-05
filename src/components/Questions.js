import { styles } from "../stylesheet";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import AnswersComponent from "./Answers";
import GameOverComponent from "./GameOver";
import FeedbackComponent from "./Feedback";
import Firebase from "./firebase"
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { CATEGORIES_MAP } from "../constants";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { imageIndex } from "../components/ImageIndex";
import CharacterButton from "./CharacterButton";


const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();

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
      currentScore: {},
      showFeedback: false,
      lastQuestionCorrect: false,
      lastQuestionAnswer: "",
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.getUrls = this.getUrls.bind(this);
    this.parseQuestionAnswerFormat = this.parseQuestionAnswerFormat.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
    this.currentPlayerName = this.currentPlayerName.bind(this);
  }

  // calls function to fetch the questions before the component mounts
  componentWillMount() {
    this.onGetQuestions(this.props.cat);
  }

  currentPlayerName() {
    return this.props.playersChosen[this.state.questionIndex % this.props.playersChosen.length];
  }

  /*
  function: getUrls
  Iterates over the user's selected categories (stored in this.props.cat)
  Creates a custom URL for each category
  Returns an array with all the URLS to fetch
  */
  getUrls(categories) {

    const analytics = Firebase.sharedInstance.analytics  // init analytics object


    var urls = [];
    var customURL = "";
    console.log("categ length: "+this.props.cat.length+" num questions: "+this.state.numQuestions);

    const numQs = Math.floor(this.state.numQuestions/ categories.length); // TODO: HOW MANY QUESTIONS SHOULD WE ASK? this or pass it into the function DUMMY FUNCTION
    this.setState({numQuestions: numQs*categories.length})
    console.log(this.props.diff);
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
      //log category to analytics
      analytics.logEvent('category', { category: categories[i] });
    }
    return urls;
  }

  // fetch quesions from cocktail trivia
  async onGetQuestions(category) {
    var chosenCategories = this.props.cat;
    const allUrls = this.getUrls(chosenCategories);
    //const finalCateg = category == null ? "MUSIC" : category; // pass in the array of categories.
    //const difficulty = this.props.diff;
    //const numQs = this.props.numQuestions; // change this or pass it into the function

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


   allData = this.shuffleArray(allData);
    allData.slice(0, this.state.numQuestions);


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
    var score;
    if (isCorrect) {
      if (this.state.currentScore[this.currentPlayerName()] === undefined) {
        score = 1;
      } else {
        score = this.state.currentScore[this.currentPlayerName()] + 1;
      }
    } else {
      if (this.state.currentScore[this.currentPlayerName()] === undefined) {
        score = 0;
      } else {
        score = this.state.currentScore[this.currentPlayerName()];
      }
    }

    const nextQIndex = this.state.questionIndex + 1;

    this.setState({ lastQuestionCorrect: isCorrect });
    this.setState({ lastQuestionAnswer: correctAnswer });
    
    var scores = this.state.currentScore;
    scores[this.currentPlayerName()] = score;

    this.setState({ currentScore: scores });
    this.setState({ questionIndex: nextQIndex });

    this.setState({ currentScore: score });

    setTimeout(() => {
      this.setState({ showFeedback: false });
      this.setState({ questionIndex: nextQIndex });
    }, FEEDBACK_SHOW_TIME_SECS * 1000);
  }

  //renders the players and shows how's the current player to keep track
  getPlayers(currentPlayer) {
    return this.props.playersChosen.map((player, index) => (
      <CharacterButton
        selectedImage={imageIndex.getImage(player["avatar"], true)}
        unSelectedImage={imageIndex.getImage(player["avatar"], false)}
        name={player["username"]}
        selected={currentPlayer === player ? true : false}
        key={index}
      />
    ));
  }

  render() {
    const previousScreenButton = (
      <IconButton
        style={styles.previousButton}
        onClick={() => this.props.callback("LANDING")}
      >
        <ArrowBackIcon fontSize="large" />
        HOME
      </IconButton>
    );

    const percentageProgress = Number((this.state.questionIndex / this.state.numQuestions).toPrecision(2)) * 100

    // console.log("playersChosen", this.props.playersChosen);
    let currentPlayerIndex = this.state.questionIndex % this.props.playersChosen.length;
    // console.log(currentPlayerIndex);
    let currentPlayer = this.props.playersChosen[currentPlayerIndex];

    return (
      <div style={styles.root}>
        <Backdrop open={this.state.showFeedback} style={styles.feedbackWrapper}>
          <FeedbackComponent
            wasCorrect={this.state.lastQuestionCorrect}
            correctAnswer={this.state.lastQuestionAnswer}
            questionIndex={this.state.questionIndex}
          />
        </Backdrop>

        <Grid container direction="column" justify="center" alignItems="center">
          {this.state.questionIndex < this.props.numQuestions && (
            <>
              {previousScreenButton}
              <div style={styles.circularProgress}>
                <CircularProgressbar value={percentageProgress} text={`${this.state.currentScore[this.currentPlayerName()]}`} styles={buildStyles({
                  textSize

                    : '40px'
                })} />
              </div>
              <p style={styles.questionText}>
                {this.state.questionsArr &&
                  entities.decode(
                    this.state.questionsArr[this.state.questionIndex].text
                  )}{" "}
              </p>

              <div style={styles.questionsBottomWrapper}>
                <div style={styles.currentPlayerSection}>
                  {this.getPlayers(currentPlayer)}

                  <div style={styles.currentPlayerText}>
                  </div>
                </div>
                <div style={styles.answersWrapper}>
                  <AnswersComponent
                    answers={
                      this.state.questionsArr &&
                      this.state.questionsArr[this.state.questionIndex].answers
                    }
                    callback={this.nextQuestion}
                  ></AnswersComponent>
                </div>
              </div>
            </>
          )}
          {this.state.questionIndex >= this.props.numQuestions && (
            <>
              <GameOverComponent
                score={this.state.currentScore}
                callback={this.props.callback}
                player={this.props.player}
              ></GameOverComponent>
            </>
          )
          }
        </Grid>
      </div>
    );
  }
}
export default QuestionsComponent;
