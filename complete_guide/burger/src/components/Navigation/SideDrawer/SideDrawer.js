import React, { Component } from 'react'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import Backdrop from '../../UI/Backdrop'
import Wrapper from '../../../hoc/Wrapper'

import styles from './SideDrawer.css'

class SideDrawer extends Component {
    render() {

        let attachedClasses = [styles.SideDrawer, styles.Close]
        if (this.props.open) {
            attachedClasses = [styles.SideDrawer, styles.Open]
        }
        return (
            <Wrapper>
                <Backdrop show={this.props.open} hideBackdrop={this.props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <div className={styles.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            </Wrapper>
        );
    }
}

export default SideDrawer;