//@flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//styles
import './index.css';

//Components
import Display from './components/Main/Display';
import Switcher from './components/Main/Switcher';


class App extends Component {
    render(){
        return(
            <div className="container">
                <Display />
                <Switcher />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);