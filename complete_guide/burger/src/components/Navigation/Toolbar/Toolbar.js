import React, {Component} from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle'

import styles from './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <header className={styles.Toolbar}>
                <DrawerToggle toogleHandler={this.props.toggleToolbarClicked} />
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav className={styles.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        );
    }  

}

export default Toolbar;