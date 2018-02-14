import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

import styles from './Toolbar.css';

const Toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );  

}

export default Toolbar;