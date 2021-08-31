import React from 'react';
import MainMenu from '../Menus/MainMenu';
import SpaceShip from '../Game Elements/SpaceShip';

class GameManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            shipPosTop: 50,
            shipPosRight: 50
        }
        this.startGame = this.startGame.bind(this);
        this.handler = this.handler.bind(this);
    }
    startGame(){
        this.setState({gameStarted: true})
    }
    handler(Event) {
        console.log("Event time");
        if (Event.key === 'w') {
            if (0 < this.state.shipPosTop) {
                console.log("Hye!");
                this.setState({shipPosTop: this.state.shipPosTop - 1})
            }
        }
        else if (Event.key === 'a') {
            if (this.state.shipPosRight < 100) {
                console.log("Hye!");
                this.setState({shipPosRight: this.state.shipPosRight + 1})
            }
        }
        else if (Event.key === 's') {
            if (this.state.shipPosTop < 100) {
                console.log("Hye!");
                this.setState({shipPosTop: this.state.shipPosTop + 1})
            }
        }
        else if (Event.key === 'd') {
            if (0 < this.state.shipPosRight) {
                console.log("Hye!");
                this.setState({shipPosRight: this.state.shipPosRight - 1})
            }
        }
    }
    render() {
        document.addEventListener("keypress", this.handler, document);
        return(
            <div>
                <MainMenu name="David" gameStarted={this.state.gameStarted} startGame={this.startGame}/>
                <SpaceShip gameStarted={this.state.gameStarted} shipPosTop={this.state.shipPosTop} shipPosRight={this.state.shipPosRight}/>
            </div>
        )
        
    }
}
export default GameManager