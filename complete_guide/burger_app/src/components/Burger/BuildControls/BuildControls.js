import React, { Component } from 'react'

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    }
]

export default class BuildControls extends Component {
    render() {
        return (
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>{this.props.price.toFixed(2)}</strong></p>
                {
                    controls.map((ctrl) => 
                    <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label} 
                        added={() => this.props.ingredientAdded(ctrl.type)}
                        removed={() => this.props.ingredientRemoved(ctrl.type)}
                        disabled={this.props.disabled[ctrl.type]}
                    />)
                }
                <button
                    className={classes.OrderButton}
                    disabled={!this.props.purchaseable}
                    onClick={this.props.ordered}>ORDER NOW</button>
            </div>
        )
    }
}
