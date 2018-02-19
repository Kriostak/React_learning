import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle'

import styles from './Toolbar.css';

const Toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <DrawerToggle toogle={props.toggleToolbar} />
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );  

}

export default Toolbar;