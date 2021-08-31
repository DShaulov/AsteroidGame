import React from 'react';
import './mainmenu.css';

class MainMenu extends React.Component{
    constructor(props) {
        super(props);
        this.name = props.name;
        this.startGame = props.startGame;
    }
    render() {
        if (!this.props.gameStarted){
            return (
                <div className="main-menu">
                    <h1>Hello, {this.props.name}</h1>
                    <h1 onClick={this.startGame} className="start-button">Start</h1>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default MainMenu;