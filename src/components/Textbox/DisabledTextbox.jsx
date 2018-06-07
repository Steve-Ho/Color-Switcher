//@flow
import React, { Component } from 'react';

//styles
import './styledTextbox.css';

class DisabledTextbox extends Component {
    render() {
        return (
            <input disabled placeholder="textbox" />            
        );
    }
}

export default DisabledTextbox;