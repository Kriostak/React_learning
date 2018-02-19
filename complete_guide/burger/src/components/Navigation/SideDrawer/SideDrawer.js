import React, { Component } from 'react'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import Backdrop from '../../UI/Backdrop'
import Aux from '../../../hoc/Aux'

import styles from './SideDrawer.css'

class SideDrawer extends Component {
    render() {

        let attachedClasses = [styles.SideDrawer, styles.Close]
        if (this.props.open) {
            attachedClasses = [styles.SideDrawer, styles.Open]
        }
        return (
            <Aux>
                <Backdrop show={this.props.open} hideBackdrop={this.props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <div className={styles.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            </Aux>
        );
    }
}

export default SideDrawer;