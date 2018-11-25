import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Wrapper from '../../wrapper/Wrapper/Wrapper';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../wrapper/WithErrorHandler/WithErrorHandler';

import instance from '../../axios-orders';

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    bacon: 0.9,
    meat: 1.4
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        instance.get('https://react-my-burger-56d63.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data
                })
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            });
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({
            purchaseable: sum > 0
        });

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = newCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');

        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Dmitriy',
                address:{
                    street: 'Teststreet 1',
                    zipCode: '1111',
                    country: 'Zimbabwe'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        instance.post('/orders.json', order)
            .then((response) => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
                console.log(response);
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
                console.log(error)
            });
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null,
            burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (<Wrapper>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                        ordered={this.purchaseHandler}
                    />
                </Wrapper>);

            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCancel={this.purchaseCancelHandler} 
                purchaseContinue={this.purchaseContinueHandler}
                price={this.state.totalPrice} />
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Wrapper>
                {burger}
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
            </Wrapper>
        );
    }
}

export default withErrorHandler(BurgerBuilder, instance);
