import React, { Component } from 'react';

import classes from './Button.css';

export default class Button extends Component {
    render() {
        return (
            <button
                className={[classes.Button, classes[this.props.buttonType]].join(' ')} 
                onClick={this.props.clicked}>
                {this.props.children}  
            </button>
        )
    }
};
