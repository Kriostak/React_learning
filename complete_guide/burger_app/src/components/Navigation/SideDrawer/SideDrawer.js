import React, { Component } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../wrapper/Wrapper/Wrapper';

import classes from './SideDrawer.css';

export default class SideDrawer extends Component {

    render() {

        let attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open];
        }
        return (
            <Wrapper>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            </Wrapper>
        )
    }
};
