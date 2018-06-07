//@flow
import React, { Component } from 'react';

//styles
import './styledButton.css';

class DisabledButton extends Component {
    render() {
        return(
            <div>
                <button disabled>Primary Action</button>
            </div>
        );
    }
}

export default DisabledButton;