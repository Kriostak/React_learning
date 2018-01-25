import React, {Component} from 'react';

import PropTypes from 'prop-types';

import styles from './BurgerIngredient.css';

class BurgerIngredient extends Component {

    ingredient = null;

    render () {

        if (this.props.type === 'bread-bottom') {
            this.ingredient = <div className={styles.BreadBottom}></div>;
        }
        else if (this.props.type === 'bread-top') {
            this.ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
        }
        else if (this.props.type === 'salad') {
            this.ingredient = <div className={styles.Salad}></div>;
        }
        else if (this.props.type === 'bacon') {
            this.ingredient = <div className={styles.Bacon}></div>;
        }
        else if (this.props.type === 'meat') {
            this.ingredient = <div className={styles.Meat}></div>;
        }
        else if (this.props.type === 'cheese') {
            this.ingredient = <div className={styles.Cheese}></div>;
        }

        return this.ingredient;

    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;