import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map((item) => {
                return ingredients[item];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({
            purchasable: sum > 0 // return true or false
        });

    }

    changeIngredinetState = (type, triggerMore) => {

        let value = this.state.ingredients[type],
            oldPrice = this.state.totalPrice,
            newPrice = null;

        const price_adishional = INGREDIENT_PRICES[type];

        if (triggerMore) {
            value++;
            newPrice = oldPrice + price_adishional;
        }
        else {
            
            if (value <= 0) {
                return;
            }
            else {
                value--;
                newPrice = oldPrice - price_adishional;
            }

        }

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = value;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler = () => {
        this.setState({
            purchasing: !this.state.purchasing
        });
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
        this.purchaseHandler();
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                
                <Modal show={this.state.purchasing} hideBackdrop={this.purchaseHandler.bind(this)}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        closeModal={this.purchaseHandler.bind(this)}
                        continueHandler={this.purchaseContinueHandler.bind(this)}
                        burgerPrice={this.state.totalPrice} />
                </Modal>
                <Burger builderIngredients={this.state.ingredients} />
                <BuildControls burgerState={this.state.ingredients} 
                    changeBurgerState={this.changeIngredinetState.bind(this)}
                    disabledInfoValue={disabledInfo}
                    purchasable={this.state.purchasable}
                    burgerPrice={this.state.totalPrice} 
                    purchase={this.purchaseHandler.bind(this)} />
            </Aux>
        );

    }

}

export default BurgerBuilder;