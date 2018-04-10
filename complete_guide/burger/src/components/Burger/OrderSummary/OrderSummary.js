import React, { Component } from 'react';

import Button from '../../UI/Button/Button';
import Wrapper from '../../../hoc/Wrapper';

class OrderSummary extends Component {

    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate')
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((item, index) => {
            return (
                <li key={item + index}>
                    <span style={{textTransform: 'capitalize'}}>{item}</span>: {this.props.ingredients[item]}
                </li>
            )
        });

        return (
            <Wrapper>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total price: <strong>{this.props.burgerPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                    <Button clickMethod={this.props.closeModal} btnType="Danger">Cancel</Button>
                    <Button btnType="Success" clickMethod={this.props.continueHandler}>Continue</Button>
                </div>
            </Wrapper>
        );
    }

};

export default OrderSummary;