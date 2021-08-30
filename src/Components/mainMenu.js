import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import './mainMenu.css';

class MainMenu extends React.Component{
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    startGame() {
        console.log("Hello!");
        ReactDOM.unmountComponentAtNode(findDOMNode());
    }
    render() {
        return (
            <div className="main-menu">
                <h1>Hello, {this.props.name}</h1>
                <h1 onClick={this.startGame} className="start-button">Start</h1>
            </div>
        )
    }
}

export default MainMenu