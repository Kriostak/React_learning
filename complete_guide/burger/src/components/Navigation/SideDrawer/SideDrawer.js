import React, { Component } from 'react'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'

import styles from './SideDrawer.css'

class SideDrawer extends Component {
    render() {



        return (
            <div className={styles.SideDrawer}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        );
    }
}

export default SideDrawer;