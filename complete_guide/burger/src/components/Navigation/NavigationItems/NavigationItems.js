import React, { Component } from 'react';

import NavigationItem from './NavigationItem'

import styles from './NavigationItems.css'

class NavigationItems extends Component {
    render() {
        return (
            <ul className={styles.NavigationItems}>
               <NavigationItem linkPath='Burger Builder' active={true}>Burger Builder</NavigationItem>
               <NavigationItem linkPath='Checkout' active={false}>Checkout</NavigationItem>
            </ul>
        );
    }
}

export default NavigationItems;