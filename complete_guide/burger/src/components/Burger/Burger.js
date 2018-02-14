import React from 'react';

import BurgerIngredient from './BurgerIngredient';

import styles from './Burger.css';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.builderIngredients).map((ingredient) => {
        
        return [...Array(props.builderIngredients[ingredient])].map((_, index) => { // [,]

            return <BurgerIngredient type={ingredient} key={ingredient + index} />
            
        });

    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredient!</p>;
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;