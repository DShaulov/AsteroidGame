import React from 'react';
import './spaceship.css'

class SpaceShip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipPosTop: props.shipPosTop,
            shipPosRight: props.shipPosRight
        }
    }
    getPosition() {
        let top = this.state.shipPosTop + "%";
        let right = this.state.shipPosRight + "%";
        return (
            [top, right]
        )
    }
    render () {
        let arr = this.getPosition();
        if (!this.props.gameStarted) {
            return null;
        }
        else {
            return (
                <h1 className="SpaceShip"
                style={{position: 'absolute', top: arr[0], right: arr[1]}}>
                    SpaceShip!!!</h1>
            )
        }
        
    }
}

export default SpaceShip;