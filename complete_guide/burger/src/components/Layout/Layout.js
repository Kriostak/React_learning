import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';
import Aux from '../../hoc/Aux';

import styles from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    toogleToolbar = () => {
        this.setState({
            showSideDrawer: !this.state.showSideDrawer
        })
    }

    render () {
        return (
            <Aux>
                <Toolbar toggleToolbar={this.toogleToolbar} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;