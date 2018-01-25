import React from 'react';

import Aux from '../../hoc/Aux';

import styles from './Layout.css';

const Layout = (props) => {
    return (
        <Aux>
            <div className={styles.Header}>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;