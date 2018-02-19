import React, { Component } from 'react';

class DrawerToggle extends Component {
    render() {
        return (
            <div onClick={this.props.toggle}>
                MENU
            </div>
        );
    }
}

export default DrawerToggle;