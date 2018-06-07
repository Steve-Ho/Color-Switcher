//@flow
import React, { Component } from 'react';

//styles
import './styledRadio.css';

class EnabledRadio extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <span>
                            <input type="radio" id="radio-3" name="radio-group-2" />
                            <label htmlFor="radio-3">Radio Button</label>
                        </span>
                    </li>
                    <li>
                        <span>
                            <input type="radio" id="radio-4" name="radio-group-2" checked />
                            <label htmlFor="radio-4">Radio Button</label>
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default EnabledRadio;