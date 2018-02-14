import React from 'react';

import BuildControl from './BuildControl';

import styles from './BuildControls.css';

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
];

const BuildControls = (props) => {

    return (
        <div className={styles.BuildControls}>
            <p>Current price: <strong>{props.burgerPrice.toFixed(2)}</strong></p>
            {
                controls.map((item, index) => {
                    return <BuildControl 
                        label={item.label} 
                        key={item.label + index}
                        onClickLess={props.changeBurgerState.bind(this, item.type, false)}
                        onClickMore={props.changeBurgerState.bind(this, item.type, true)}
                        isDisabledLess={props.disabledInfoValue[item.type]} />
                })
            }
            <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.purchase}>ORDER NOW</button>
        </div>
    );

};

export default BuildControls;