import React, { Component } from 'react'

import styles from './DrawerToggle.css'

class DrawerToggle extends Component {

    render() {
        return (
            <div className={styles.DrawerToggle} onClick={this.props.toogleHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}

export default DrawerToggle;