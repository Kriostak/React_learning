import React from 'react';

import Logo from '../../Logo/Logo';

import styles from './Toolbar.css';

const Toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    );  

}

export default Toolbar;