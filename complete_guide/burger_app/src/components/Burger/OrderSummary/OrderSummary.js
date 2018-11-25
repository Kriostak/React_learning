import React, { Component } from 'react';

import Wrapper from '../../../wrapper/Wrapper/Wrapper';
import Button from '../../UI/Button/Button'

export default class OrderSummary extends Component {

    render() {

        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Wrapper>
                <h3>Your Order</h3>
                <p>A delicious burder with following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button buttonType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button buttonType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </Wrapper>
        )
    }
};
