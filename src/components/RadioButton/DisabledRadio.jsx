//@flow
import React, { Component } from 'react';

//styles
import './styledRadio.css';

class DisabledRadio extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <span>
                            <input type="radio" id="radio-1" name="radio-group" disabled/>
                            <label htmlFor="radio-1">Radio Button</label>
                        </span>
                    </li>
                    <li>
                        <span>
                            <input type="radio" id="radio-2" name="radio-group" checked disabled />
                            <label htmlFor="radio-2">Radio Button</label>
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DisabledRadio;