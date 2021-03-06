import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import BoardRow from "./BoardRow"
import TableBody from "@material-ui/core/TableBody"
import Firebase from "./firebase"
import HomeIcon from '@material-ui/icons/Home';
import Fab from '@material-ui/core/Fab';
import purple from '@material-ui/core/colors/purple';




class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allRows: []
        };
        
        this.getData = this.getData.bind(this);
        this.getMarker = this.getMarker.bind(this);
        this.onGoHome = this.onGoHome.bind(this);

    }

    async getMarker() {
        let firebase = Firebase.sharedInstance;
        const snapshot = await firebase.db.collection("users").get()

        return snapshot.docs.map((doc) => {
            let temp = doc.data()
            temp["uid"] = doc.id
            return temp
        });
    }

    async componentWillMount() {
        const data = await this.getData();

        const currentPlayers = []
        for (let player of this.props.playersChosen){
            currentPlayers.push(player["username"])
        }

        const allRows = []
        for (let item of data){
            let isCurrentPlayer = false;
            if (currentPlayers.indexOf(item.player) > -1) isCurrentPlayer = true
        
            console.log("is current player: "+isCurrentPlayer);
            console.log(item);
            
            
            
            allRows.push( <BoardRow username={ item.player} score={item.totalScore} isCurrentPlayer={isCurrentPlayer} avatar={item.avatar}  />)
        }

        this.setState({
            allRows : allRows
        });
    }

    async getData() {
        const res = await this.getMarker()


        const maxScores = []
        for (let item of res) {
            let currentSum = 0;
            for (let i in item) {
                if(i && Number(i) >= 1000000000000){
                    
                    currentSum += item[i]
                }
            }

            maxScores.push({ player: item["uid"], totalScore: currentSum , avatar: item["avatar"]});
        }


        // sort the object with max scores and the players
        maxScores.sort(function (a, b) {
            var keyA = a.totalScore,
                keyB = b.totalScore;
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });
        return maxScores;
    }

    onGoHome() {
        this.props.callback("LANDING");
    };

    render() {

        const colHome = purple[600];
        return (
            <div style={styles.root}>
                <div style={styles.parent}>

                <Grid style={styles.title} direction="column">  <>LEADERBOARD </>
                <Table>
                    <TableBody>
                        <TableRow style={styles.leaderBoardTitleCont} >
                            <TableCell  style={styles.leaderBoardTitle}> Player</TableCell>
                            <TableCell  style={styles.leaderBoardTitle}align="right">Total Score</TableCell>
                        </TableRow>
                        {this.state.allRows}
                    </TableBody>
                </Table>
                <Fab size="medium" color={colHome} aria-label="home" style={styles.homeIcon} onClick={this.onGoHome} >
          <HomeIcon />
        </Fab>
                </Grid>
                </div>
            </div>
        );
    }
}
export default Leaderboard;
