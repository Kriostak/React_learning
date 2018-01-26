import React from 'react';

import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map((item, index) => {
            return (
                <li key={item + index}>
                    <span style={{textTransform: 'capitalize'}}>{item}</span>: {props.ingredients[item]}
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <strong>{props.burgerPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                <Button clickMethod={props.closeModal} btnType="Danger">Cancel</Button>
                <Button btnType="Success" clickMethod={props.continueHandler}>Continue</Button>
            </div>
        </Aux>
    );

};

export default OrderSummary;