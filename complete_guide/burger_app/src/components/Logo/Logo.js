import React, { Component } from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <div className={classes.Logo}>
                <img src={burgerLogo} alt="BurgerLogo" />
            </div>
        )
    }
}
