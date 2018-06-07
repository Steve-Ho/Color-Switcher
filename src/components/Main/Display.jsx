//@flow
import React, { Component } from 'react';

//shared-styles
import styledContainer from './styledContainer';

//Components
import DisabledButton from '../Button/DisabledButton';
import EnabledButton from '../Button/EnabledButton';
import DisabledTextbox from '../Textbox/DisabledTextbox';
import EnabledTextbox from '../Textbox/EnabledTextbox';
import DisabledRadio from '../RadioButton/DisabledRadio';
import EnabledRadio from '../RadioButton/EnabledRadio';


class Display extends Component {
    render(){
        const styledText = {
            fontSize: '1em',
            textTransform: 'uppercase',
            fontWeight:'500',
            color:'#cccdcd',
        }
        const styledCard = {
            marginTop:'-255px',
            marginLeft:'330px',
            border:'1px solid #000',
            width:'215px',
            height:'230px',
            zIndex:'99',
            padding:'0px 10px'
        }
        return(
                <div>
                    <div style={styledContainer}>
                        <div>
                            <span style={styledText}>Disabled</span>
                            <DisabledButton />
                            <DisabledTextbox />
                            <DisabledRadio />
                        </div>
                        <div>
                            <span style={styledText}>Hover / Enabled</span>
                            <EnabledButton />
                            <EnabledTextbox />
                            <EnabledRadio />
                        </div>
                    </div>
                    <div style={styledCard}>
                        <h3>Card Heading</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor.</span>
                        <EnabledButton />
                    </div>
                </div>
        );
    }
}

export default Display;