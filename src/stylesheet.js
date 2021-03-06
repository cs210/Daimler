const styles = {
  rootBackgroundColor: {
    flexGrow: 1,
    backgroundImage: `url(${require("./background.jpeg")})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: 1000,
    height: 495,
    resizeMode: 'cover',
    fontFamily: "Bangers",
    overflow: "scroll",
    zIndex: 1,
  },
  root: {
    flexGrow: 1,
    //Daimler Background image
    backgroundImage: `url(${require("./daimlerBackground.png")})`,
    backgroundSize: 'contain',
    width: 1000,
    height: 495,
    resizeMode: 'cover',
    fontFamily: "Bangers",
    overflow: "scroll",
    zIndex: 1,

  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 100
  },
  profileComponentWrapper: {
    display: "flex",
    flexDirection: 'row',
    marginLeft: 100,
    marginRight: 100,
  },
  avatarSection: {
    display: "flex",
    flex: 3,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  playerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  playerWrapperCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5,
  },
  avatarScore: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    marginBottom: 'auto',
    alignItems: "center",
  },
  score: {
    color: "white",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  scoreVertical: {
    color: "white",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5
  },
  addPlayerSection: {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
    alignItems: "center",
    marginTop: '5vh',
    color: 'white'
  },
  inputSection: {
    display: "flex",
    flexDirection: 'column',
    flex: 2,
    marginTop: '10vh',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'space-between'
  },
  addPlayerButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    fontFamily: 'Bangers',
    backgroundColor: "#205B82",
    color: "white",
    fontSize: 24,
  },
  categoryButtonsContainer: {
    marginLeft: 100,
    marginRight: 100,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  categoryRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  column: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  },
  selectedButton: {
    backgroundColor: 'white',
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    border: '3px solid #4DFAFA',
    width: 332,
    height: 78,
    fontFamily: 'Bangers',
    marginTop: 10,
    marginRight: 5,
  },
  smallSelectedButton: {
    backgroundColor: 'white',
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    border: '3px solid #4DFAFA',
    width: 280,
    height: 78,
    fontFamily: 'Bangers',
    marginTop: 10,
    marginRight: 5,
    fontSize: 30,
  },

  smallSelectedButtonTimer: {
    backgroundColor: 'white',
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    border: '3px solid #4DFAFA',
    width: 280,
    height: 78,
    fontFamily: 'Bangers',
    marginTop: 10,
    marginRight: 5,
    fontSize: 30,
  },

  nextButton: {
    color: "white",
    position: "fixed",
    top: 420,
    left: 880,
    fontFamily: 'Bangers'
  },
  previousButton: {
    color: "white",
    position: "fixed",
    top: 10,
    left: 10,
    fontFamily: 'Bangers'
  },
  title: {
    color: "white",
    fontSize: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  landingTitle: {
    color: "#1F1F55",
    strokeWidth: "10",
    fontSize: 52,
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 70
  },
  //Landing Page Title Styling
  titleLandingPage: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    textAlign: "center",
  },
  feedbackWrapper: {
    zIndex: 10,
    width: 1000,
    height: 495,
  },
  feedbackContent: {
    display: "flex",
    textAlign: "center",
  },
  questionText: {
    color: "white",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontFamily: 'Open Sans'
  },
  feedbackHeaderTextCorrect: {
    color: "#379634",
    fontSize: 60,
  },
  feedbackHeaderTextIncorrect: {
    color: "#F06449",
    fontSize: 60,
  },
  feedbackBodyText: {
    color: "white",
  },
  unselectedButton: {
    backgroundColor: "#205B82",
    color: "white",
    borderRadius: 20,
    width: 332,
    height: 78,
    fontFamily: "Bangers",
    marginTop: 10,
    marginRight: 5,
    fontSize: 30,
  },
  smallUnselectedButton: {
    backgroundColor: "#205B82",
    color: "white",
    borderRadius: 20,
    width: 280,
    height: 78,
    fontFamily: "Bangers",
    marginTop: 10,
    marginRight: 5,
    fontSize: 30,
  },
  answerButton: {
    backgroundColor: "#205B82",
    color: "white",
    fontSize: 20,
    borderRadius: 20,
    width: 332,
    height: 80,
    fontFamily: "Open Sans",
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 5,
  },
  answerButtonCorrect: {
    backgroundColor: "#33FF62",
    color: "white",
    fontSize: 20,
    borderRadius: 20,
    width: 332,
    height: 80,
    fontFamily: "Open Sans",
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 5,
    border: '5px solid #33FF62',
  },
  startButton: {
    backgroundColor: "#205B82",
    color: "#1F1F55",
    fontSize: 22,
    borderRadius: 20,
    marginTop: 130,
    marginLeft: 430,
    width: 200,
    height: 120,
    fontFamily: "Bangers",
  },

  landingStartButton: {
    backgroundColor: 'white',
    color: '#07142B',
    fontSize: 32,
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    border: '3px solid #4DFAFA',
    width: 170,
    height: 78,
    fontFamily: 'Bangers',
    marginTop: 120,
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  columnGrid: {
    display: "grid",
    direction: "column",
  },
  rowGrid: {
    display: "grid",
    direction: "row",
  },
  unselectedCharacterButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Bangers',
    backgroundColor: "#205B82",
    color: "white",
    margin: 5
  },
  selectedCharacterButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Bangers',
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '3px solid #4DFAFA',
    margin: 5
  },
  unselectedAvatarButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Bangers',
    backgroundColor: "#205B82",
    color: "white",
    margin: 5
  },
  selectedAvatarButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Bangers',
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '3px solid #4DFAFA',
    margin: 5
  },
  smallselectedAvatar: {
    display: 'flex',
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '3px solid #4DFAFA',
  },
  smallUnselectedAvatar: {
    display: 'flex',
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#205B82",
    color: "white",
  },
  newPlayerButton: {
    backgroundColor: 'white',
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    border: '3px solid #4DFAFA',
    width: 200,
    height: 78,
    fontFamily: 'Bangers'
  },
  characterButtonContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  characterButtonImage: {
    width: 50,
    height: 50
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white'
  },
  characterButtonText: {
    fontSize: 16,
    marginTop: 5
  },
  leaderBoardText: {
    color: "white",
    fontSize: 24,
    fontFamily: 'Open Sans',
    borderBottom: "none"
  },
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  leaderboard: {
    display: "flex",
    width: 1000
  },
  homeIcon: {
    position: 'absolute',
    top: 400,
    left: 900,
    color: "purple"
  },
  leaderBoardTitleCont: {
    width: 1000,
  },
  leaderBoardTitle: {
    color: "white",
    fontSize: 28,
    fontFamily: 'inherit',
    borderBottom: "none"
  },
  //For single page difficulty and duration
  selectionText: {
    color: "white",
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  circularProgress: {
    width: '80%',
    marginTop: 20,
    colorPrimary: '#1F1F55',
  },
  questionsBottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  currentPlayerSection: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  currentPlayerText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },
  answersWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  },
  unselectedCategoryButton: {
    backgroundColor: "#205B82",
    color: "white",
    borderRadius: 20,
    width: 160,
    height: 78,
    fontFamily: "Bangers",
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 20
  },
  selectedCategoryButton: {
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '3px solid #4DFAFA',
    borderRadius: 20,
    width: 160,
    height: 78,
    fontFamily: "Bangers",
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 20
  },
};

export { styles };
