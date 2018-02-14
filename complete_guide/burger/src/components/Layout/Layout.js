import React from 'react';

import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';
import Aux from '../../hoc/Aux';

import styles from './Layout.css';

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;