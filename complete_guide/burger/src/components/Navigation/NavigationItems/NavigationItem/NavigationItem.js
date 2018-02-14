import React, { Component } from 'react';

import styles from './NavigationItem.css'

class NavigationItem extends Component {
    render() {
        return (
            <li className={styles.NavigationItem}>
                <a href={this.props.linkPath} className={this.props.active ? styles.active: null}>{this.props.children}</a>
            </li>
        );
    }
}

export default NavigationItem;