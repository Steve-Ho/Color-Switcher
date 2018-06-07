//@flow
import React, { Component } from 'react';

//shared-styles
import styledContainer from './styledContainer';

//styles
import './SwitcherButtons.css';

class Switcher extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickedIndex: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

        handleClick(index) {
            this.setState({
                clickedIndex: index
            });
        }


    render() {
        return(
            <div style={styledContainer}>
                <div className="topContainer">
                    <button id="bigButtons" className="limePrimary">Lime-Primary<br/>#9CFF93</button>
                    <button id="bigButtons" className="peachPrimary">Peach-Primary<br/>#FFE9AF</button>
                    <button id="bigButtons" className="statePrimary">State-Primary<br/>#262630</button>
                    <button id="smallButtons" className="limeDark">Lime-Dark<br/>#7AC471</button>
                    <button id="smallButtons" className="peachDark">Dark-Peach<br/>#FFD366</button>
                    <button id="smallButtons" className="stateLite">State-Lite<br/>#CDCDD8</button>
                </div>
            </div>
        );
    }
}

export default Switcher;