import React, { Component } from 'react'

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

export default class NavigationItems extends Component {
    render() {
        return (
            <div className={classes.NavigationItems}>
                <NavigationItem link='#' active>Burger Builder</NavigationItem>
                <NavigationItem link='#'>Checkout</NavigationItem>
            </div>
        )
    }
}
